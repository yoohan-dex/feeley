// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { createSelector } from 'reselect';

import { makeSelectLocale } from './selectors';

export interface LanguageProps {
  locale: string,
  messages: {
    [id: string]: string,
  },
  children: any,
}

class LanguageProvider extends Component {
  props: LanguageProps;
  render() {
    const { locale, messages, children } = this.props;
    return (
      <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
        {React.Children.only(children)}
      </IntlProvider>
    );
  }
}

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}));

export default connect(mapStateToProps)(LanguageProvider);
