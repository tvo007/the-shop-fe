import React, {useEffect} from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {ThemeProvider} from '@material-ui/styles';
// import validate from 'validate.js';
//redux
import {Provider} from 'react-redux';
// import store from './store';
// import {loadUser} from './actions/auth';
// import setAuthToken from './utils/setAuthToken';

import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
// import './assets/scss/index.scss';
// import validators from './common/validators';
import Routes from './Routes';

const browserHistory = createBrowserHistory ();

const App = () => {
  // useEffect(() => {
  //   setAuthToken(localStorage.token)
  //   store.dispatch(loadUser())
  // }, [])

  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;

/**
 * temp:
 * 
 * <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>
 * 
 * 
 */
