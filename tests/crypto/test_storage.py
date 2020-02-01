import pytest

INITIAL_VALUE = 4


@pytest.fixture
def storage_contract(w3, get_contract):
    with open('src/crypto/storage.vy') as f:
        contract_code = f.read()
        # Pass constructor variables directly to the contract
        contract = get_contract(contract_code, INITIAL_VALUE)
    return contract


def test_initial_state(storage_contract):
    assert storage_contract.stored_data() == INITIAL_VALUE


def test_set(w3, storage_contract):
    k0 = w3.eth.accounts[0]

    # Let k0 try to set the value to 10
    storage_contract.set(10, transact={"from": k0})
    assert storage_contract.stored_data() == 10  # Directly access storedData

    # Let k0 try to set the value to -5
    storage_contract.set(-5, transact={"from": k0})
    assert storage_contract.stored_data() == -5
