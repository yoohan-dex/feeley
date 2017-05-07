// @flow
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './pages/App';
import EditPage from './pages/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/edit" component={EditPage} />
      <Route path="/" component={App} />
    </Switch>
  );
}
