import React from 'react';
import './styles.css';
import { FormattedMessage, defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'header.title',
    defaultMessages: 'Feeley',
  },
});

const Logo = () => {
  return (
    <div className="logo">
      <div />
      <FormattedMessage tagName="h2" {...messages.title} />
    </div>
  );
};

export default Logo;
