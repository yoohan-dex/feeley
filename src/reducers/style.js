// @flow
import { CHANGE_LOCALE, DEFAULT_LOCALE } from '../actions/constants';

import type { Action } from '../actions/types';

export type languageState = {
  style: Object,
};

const initialState: languageState = {
  color: 'red',
};

export default function(state: languageState = initialState, action: Action) {
  switch (action.type) {
    case 'CHANGE_LOCALE':
      return {
        ...state,
        color: 'green',
      };
    case 'haha':
      return {
        ...state,
        color: 'red',
      };
    default:
      return state;
  }
}
