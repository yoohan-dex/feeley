// @flow
import { CHANGE_LOCALE } from './constants';
export interface LocaleAction {
  type: CHANGE_LOCALE,
  locale: string,
}

export function changeLocale(languageLocale: string): LocaleAction {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
