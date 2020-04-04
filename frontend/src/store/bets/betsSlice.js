import { createSlice } from '@reduxjs/toolkit';
import { getBets } from '../../api';

const initialState = {
  bets: []
}

export const betsSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    fetchBetsSuccess: (state, action) => {
      state.bets = action.payload;
    }
  },
})

const { fetchBetsSuccess } = betsSlice.actions;

export const fetchBets = () => async dispatch => {
  const bets = await getBets();
  dispatch(fetchBetsSuccess(bets));
}

// selectors
export const selectBets = state => state.bets.bets;

export default betsSlice.reducer;
