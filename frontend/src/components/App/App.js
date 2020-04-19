import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
      </Helmet>
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
