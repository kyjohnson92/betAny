DataChange: event({_setter: indexed(address), _value: int128})

stored_data: public(int128)

@public
def __init__(_x: int128):
    self.stored_data = _x

@public
def set(_x: int128):
    assert _x >= 0 # No negative values
    assert self.stored_data < 100 # Storage will lock wehn 100 or more is stored
    self.stored_data = _x
    log.DataChange(msg.sender, _x)

@public
def reset():
    self.stored_data = 0
