import { createSlice } from '@reduxjs/toolkit';
import decode from 'jwt-decode';
import { getUserToken } from '../../api';

export const initialState = {
  token: undefined,
  id: undefined,
  username: undefined,
  accountBalance: undefined,
  isLoggedIn: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { id, username } = action.payload;
      state.id = id;
      state.username = username;
      state.isLoggedIn = true;
    },
    logout: () => {
      localStorage.removeItem('token');
      return initialState;
    }
  }
});

// actions
export const { login: loginAction, logout } = userSlice.actions;

export const login = (username, password) => async (dispatch) => {
  const resp = await getUserToken(username, password);
  const { token} = resp;
  if (token) {
    const { user_id: id, username } = decode(token);
    const betAnyUser = {
      id,
      username,
      token,
    }
    localStorage.setItem('betAny-user', JSON.stringify(betAnyUser))
    dispatch(loginAction(betAnyUser));
  } else {
    throw new Error('error fetching token');
  }
}

// selectors
export const selectUser = state => state.user;

export default userSlice.reducer;
