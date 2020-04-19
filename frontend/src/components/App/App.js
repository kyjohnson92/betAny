import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loginUser, logout, selectUser } from '../../store/user/userSlice';
import { fetchBets } from '../../store/bets/betsSlice';
import { Navbar } from '../Navbar/Navbar';
import { BetsComponent } from '../Bets/Bets';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    // fetch bets when the app loads.
    if (user.isLoggedIn) {
      dispatch(fetchBets());
    }
  });

  function onClickLogin() {
    dispatch(
      loginUser(
        process.env.BETANY_USER || 'john',
        process.env.BETANY_PWD || 'Mowgli4812'
      )
    );
  }

  function onClickLogout() {
    dispatch(logout());
  }

  return (
    <Router>
      <Navbar />
      <div>
        {user.isLoggedIn ? (
          <button onClick={onClickLogout}>Logout</button>
        ) : (
          <button onClick={onClickLogin}>Login</button>
        )}
      </div>
      <Switch>
        <Route path={['/my-bets', '/all-bets']}>
          <BetsComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
