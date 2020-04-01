import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './store/user/userSlice';


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  function onClickLogin() {
    dispatch(login('john', 'Mowgli4812'));
  }

  function onClickLogout() {
    dispatch(logout());
  }

  return (
    <div>
    {user.isLoggedIn ?
      <button onClick={onClickLogout}>Logout</button>
      : <button onClick={onClickLogin}>Login</button>
    }
      </div>
  );
}

export default App;
