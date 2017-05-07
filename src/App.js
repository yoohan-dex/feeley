// @flow
import React from 'react';
import { ApolloProvider } from 'react-apollo';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import client from './apollo';
import createStore from './store';
import LanguageProvider from './containers/LanguageProvider';
import { translationMessage } from './i18n';
import Routes from './routes';
import theme from './muiTheme';
const history = createHistory();
const store = createStore({}, history);
const App = () => (
  <ApolloProvider client={client} store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <LanguageProvider messages={translationMessage}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </LanguageProvider>
    </MuiThemeProvider>
  </ApolloProvider>
);

export default App;
