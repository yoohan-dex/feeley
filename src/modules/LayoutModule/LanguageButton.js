// @flow
import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { changeLocale } from '../../actions/language';
import { makeSelectLocale } from '../../containers/LanguageProvider/selectors';

import messages from './messages';

type Props = {
  changeLocale: () => void,
  locale: string,
};
const LanguageButton = (props: Props) => {
  const changeLocale = () => {
    const { locale, changeLocale } = props;
    const turnTo = locale === 'en' ? 'zh' : 'en';
    changeLocale(turnTo);
  };
  return (
    <div onClick={changeLocale}>
      <FormattedMessage {...messages.language} />
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  changeLocale: (locale: string) => {
    dispatch(changeLocale(locale));
  },
});

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}));
export default connect(mapStateToProps, mapDispatchToProps)(LanguageButton);
