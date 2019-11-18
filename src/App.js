import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Auth, Home } from './pages';

const App = props => {
  const { isAuth } = props
  return (
    <div className="wrapper">
      {isAuth
        ? <Redirect to='/me' />
        : <Redirect to='/login' />
      }
      <Route exact path={['/', '/login', '/register']} component={Auth} />
      <Route path='/me' component={Home} />
    </div>
  )
}


export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
