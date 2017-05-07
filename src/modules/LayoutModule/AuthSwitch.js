import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPanel, RegisterPanel } from '../Auth';
const Auth = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginPanel} />
      <Route path="/register" exact component={RegisterPanel} />
    </Switch>
  );
};

export default Auth;
