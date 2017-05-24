import {combineReducers} from 'redux';

import dialog from './dialog';

const todoApp = combineReducers({
  dialog
});

export default todoApp;
