import textwrap

import hypothesis
from hypothesis import (
    HealthCheck,
    assume,
    given,
)
from hypothesis.extra.lark import (
    LarkStrategy,
)
import hypothesis.strategies as st
import pytest

from conftest import (
    get_lark_grammar,
)
from vyper.parser import (
    parser,
)


def test_basic_grammar(lark_grammar):
    code = """
    a: uint256
    b: uint128
    """
    code_func = """
    @public
    def one_two_three() -> uint256:
        return 123123123
    """

    assert lark_grammar.parse(textwrap.dedent(code) + "\n")
    assert parser.parse_to_ast(textwrap.dedent(code))

    assert lark_grammar.parse(textwrap.dedent(code_func) + "\n")
    assert parser.parse_to_ast(textwrap.dedent(code_func))


def test_basic_grammar_empty(lark_grammar):
    code = """
    """
    tree = lark_grammar.parse(textwrap.dedent(code) + "\n")
    assert len(tree.children) == 0


# With help from hyposmith
# https://github.com/Zac-HD/hypothesmith/blob/master/src/hypothesmith/syntactic.py

COMPILE_MODES = {
    "eval_input": "eval",
    "file_input": "exec",
    "stmt": "single",
    "simple_stmt": "single",
    "compound_stmt": "single",
}


def utf8_encodable(terminal: str) -> bool:
    try:
        if '\x00' not in terminal and '\\ ' not in terminal and '\x0c' not in terminal:
            terminal.encode("utf-8-sig")
            return True
        else:
            return False
    except UnicodeEncodeError:  # pragma: no cover
        # Very rarely, a "." in some terminal regex will generate a surrogate
        # character that cannot be encoded as UTF-8.  We apply this filter to
        # ensure it doesn't happen at runtime, but don't worry about coverage.
        return False


class GrammarStrategy(LarkStrategy):
    def __init__(self, grammar, start, explicit_strategies):
        super().__init__(grammar, start, explicit_strategies)
        self.terminal_strategies = {
            k: v.map(lambda s: s.replace("\0", "")).filter(utf8_encodable)
            for k, v in self.terminal_strategies.items()  # type: ignore
        }

    def draw_symbol(self, data, symbol, draw_state):  # type: ignore
        count = len(draw_state.result)
        super().draw_symbol(data, symbol, draw_state)
        if symbol.name in COMPILE_MODES:
            try:
                compile(
                    source="".join(
                        draw_state.result[count:]
                    ).replace("contract", "class").replace("struct", "class"),
                    filename="<string>",
                    mode=COMPILE_MODES[symbol.name],
                )
            except SyntaxError:
                # Python's grammar doesn't actually fully describe the behaviour of the
                # CPython parser and AST-post-processor, so we just filter out errors.
                assume(False)


def from_grammar(start: str = "file_input") -> st.SearchStrategy[str]:
    """Generate syntactically-valid Python source code based on the grammar.
    Valid values for ``start`` are ``"single_input"``, ``"file_input"``, or
    ``"eval_input"``; respectively a single interactive statement, a module or
    sequence of commands read from a file, and input for the eval() function.
    """
    assert start in {"single_input", "file_input", "eval_input"}
    grammar = get_lark_grammar()
    explicit_strategies = dict(
        _INDENT=st.just(" " * 4),
        _DEDENT=st.just(""),
        NAME=st.from_regex(r"[a-z_A-Z]+", fullmatch=True).filter(str.isidentifier),
    )
    return GrammarStrategy(grammar, start, explicit_strategies)


@pytest.mark.fuzzing
@given(
    code=from_grammar()
)
@hypothesis.settings(
    deadline=400,
    max_examples=500,
    suppress_health_check=(HealthCheck.too_slow, )
)
def test_grammar_bruteforce(code):
    if utf8_encodable(code):
        tree = parser.parse_to_ast(code + "\n")
        assert isinstance(tree, list)
