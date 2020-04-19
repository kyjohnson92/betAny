import { createSlice } from '@reduxjs/toolkit';
import decode from 'jwt-decode';
import { getUserToken } from '../../api';
// import { logout as betsLogoutEffect } from '../bets/betsSlice';

// initial user state, provided to reducer, for when user
// is not already logged in and info is in localStorage
const initialState = {
  token: undefined,
  id: undefined,
  username: undefined,
  accountBalance: undefined,
  isLoggedIn: false,
};

// creates slice of user state in redux store.
// declare initial state, and reducers, which are functions
// that handle state change.
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { id, username, token } = action.payload;
      state.id = id;
      state.token = token;
      state.username = username;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      console.log(state);
      return initialState;
    },
  },
});

// actions
export const { login, logout } = userSlice.actions;

export const loginUser = (username, password) => async (dispatch) => {
  const resp = await getUserToken(username, password);
  const { token } = resp;
  if (token) {
    const { user_id: id, username } = decode(token);
    const betAnyUser = {
      id,
      username,
      token,
    };
    dispatch(login(betAnyUser));
  } else {
    throw new Error('error fetching token');
  }
};

// selectors
export const selectUser = (state) => state.user;

export default userSlice.reducer;
