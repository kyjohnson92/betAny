import { configureStore, combineReducers } from '@reduxjs/toolkit';
import throttle from 'lodash/throttle';
import userReducer, { logout } from '../store/user/userSlice';
import betsReducer from '../store/bets/betsSlice';
import { saveUser, loadUser } from './localStorageApi';

const appReducer = combineReducers({
  user: userReducer,
  bets: betsReducer,
});

// Watches for calls that affect the WHOLE store.
// such as Logout. Which needs to affect both user slice
// and bets slice.
const rootReducer = (state, action) => {
  if (action.type === logout.type) {
    state = undefined;
  }

  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    user: loadUser()
  }
})

// Whenever the store state changes save the user
// in the future this will save whole redux state.
store.subscribe(throttle(() => {
  saveUser(store.getState().user)
}, 1000))

export default store;
