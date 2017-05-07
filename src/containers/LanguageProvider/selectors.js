import { createSelector } from 'reselect';

const selectLanguage = state => state.language;

const makeSelectLocale = () =>
  createSelector(selectLanguage, language => language.locale);

export { selectLanguage, makeSelectLocale };
