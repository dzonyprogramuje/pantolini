import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {signIn} from './redux/actions'
import {LogIn} from './components/LogIn'
import {Dashboard} from './components/Dashboard'

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <>
    {
        isLogged ? <Dashboard /> : <LogIn />
    }  

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