# Personal bet

# Bet params
bet_owner: public(address)
start_time: public(timestamp)
end_time: public(timestamp)

# Set true at the end, which disallows any changes
ended: public(bool)

bet_accepter: public(address)

bet_stakes: public(map(address, wei_value))

@public
def __init__(_bet_owner: address, _bet_time: timedelta):
    self.bet_owner = _bet_owner
    self.start_time = block.timestamp
    self.end_time = self.start_time + _bet_time

@public
@payable
def bet():
    # Check if betting time is over
    assert block.timestamp < self.end_time
    