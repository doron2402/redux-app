import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import {
  MainContainer,
  HomeContainer,
  DoronContainer,
  AuthenticateContainer } from 'containers'


const routes = (
  <Router history={hashHistory}>
    <Router path='/' component={MainContainer}>
      <Route path='/auth' component={AuthenticateContainer} />
      <Route path='/doron' component={DoronContainer} />
      <IndexRoute component={HomeContainer} />
    </Router>
  </Router>
)

export default routes
