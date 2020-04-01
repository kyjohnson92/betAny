import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/user/userSlice';
import { initialState as emptyUserState } from './user/userSlice';

let localStorageUser;
try {
  localStorageUser = JSON.parse(localStorage.getItem('betAny-user'));
  console.log(`Logging in ${localStorageUser.username}`)
} catch {
  // throw new Error('issue in local storage token and user info retrieval');
  console.error('issue in local storage token and user info retrieval');
}

const initialUser = localStorageUser ? { ...localStorageUser, isLoggedIn: true } : emptyUserState;

export default configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: {
    user: initialUser
  }

});
