import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { selectUser } from '../../store/user/userSlice';
import { StylesProvider } from '@material-ui/core/styles';
import { BetsComponent } from '../Bets/Bets';
import LandingPage from '../LandingPage/LandingPage';

function App() {
  const user = useSelector(selectUser);

  return (
    <StylesProvider injectFirst>
      <Router>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
        </Helmet>
        <Switch>
          <Route path={'/'}>
            {user.isLoggedIn ? (
              {
                /* Bets Dashboard */
              }
            ) : (
              <LandingPage />
            )}
          </Route>
          <Route path={['/my-bets', '/all-bets']}>
            <BetsComponent />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
}

export default App;
