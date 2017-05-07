import React from 'react';
import ReactDOM from 'react-dom';
import injectTapPlugin from 'react-tap-event-plugin';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import './index.css';

injectTapPlugin();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
