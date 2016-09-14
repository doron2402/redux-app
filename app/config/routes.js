import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, DoronContainer } from 'containers'


const routes = (
  <Router history={hashHistory}>
    <Router path='/' component={MainContainer}>
      <Route path='/doron' component={DoronContainer} />
      <IndexRoute component={HomeContainer} />
    </Router>
  </Router>
)

export default routes
