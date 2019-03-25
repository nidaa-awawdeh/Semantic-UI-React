import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Router, Switch } from 'react-static'
import Routes from 'react-static-routes'

const App = () => (
  <Router>
    <Switch>
      <Routes />
    </Switch>
  </Router>
)

export default hot(App)
