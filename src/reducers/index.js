// @flow
import language from './language';
import style from './style';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  router: routerReducer,
  language,
  style,
});
