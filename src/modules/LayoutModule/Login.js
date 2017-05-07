import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
class Login extends Component {
  render() {
    return (
      <div>
        <Link to="/login">
          <FormattedMessage tagName="div" {...messages.login} />
        </Link>
      </div>
    );
  }
}

export default Login;
