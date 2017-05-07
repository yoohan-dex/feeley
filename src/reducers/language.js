// @flow
import { CHANGE_LOCALE, DEFAULT_LOCALE } from '../actions/constants';

import type { Action } from '../actions/types';

export type languageState = {
  locale: CHANGE_LOCALE | DEFAULT_LOCALE,
};

const initialState: languageState = {
  locale: DEFAULT_LOCALE,
};

export default function(state: languageState = initialState, action: Action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return {
        ...state,
        locale: action.locale,
      };
    default:
      return state;
  }
}
