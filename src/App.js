import React from 'react'

import {signIn} from './redux/actions'
import LogIn from './components/LogIn'
import {Dashboard} from './components/Dashboard'

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

import { connect } from 'react-redux';

function App({isLogged}) {

  return (
    <>
    
  <Router>
    {
        isLogged ? <Redirect to='/dashboard' /> : <Redirect to='/login' />
    }
    <Switch>        
      <Route exact path="/dashboard"><Dashboard /></Route>
      <Route exact path="/login"><LogIn /></Route>
    </Switch>
  </Router>
      {/* <Router>
        <Switch>
          <PrivateRoute
                  exact
                  path="/"
                  component={Dashboard}
          />
        </Switch>
      </Router> */}
    </>
  )
}


const mapStateToProps = function(state) {
    return {
      isLogged: state.isLogged,
    }
}

export default connect(mapStateToProps)(App);