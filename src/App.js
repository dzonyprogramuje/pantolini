import React from 'react'

import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import AllFriends from './components/AllFriends'

import {connect} from 'react-redux';
import {signIn} from './redux/actions'

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App({isLogged, friends}) {
  const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#303030',
      main: '#212121',
      dark: '#171717',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e3f2fd',
      main: '#bbdefb',
      dark: '#90caf9',
      contrastText: '#424242',
    },
  },
});

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {
          isLogged ? <Redirect to='/dashboard' /> : <Redirect to='/login' />
        }
        <Switch>        
          <Route exact path="/dashboard"><Dashboard /></Route>
          <Route exact path="/login"><LogIn /></Route>
          <Route exact path="/my-profile"><Profile /></Route>
          <Route exact path="/my-friends"><AllFriends friends={friends} /></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

const mapStateToProps = function(state) {
    return {
      isLogged: state.isLogged,
      friends: state.friends,
    }
}

export default connect(mapStateToProps)(App)