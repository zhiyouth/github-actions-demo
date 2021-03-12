//reducers/index.js

import { combineReducers } from 'redux';
import * as reducers from './reducers';
console.log(reducers, 'reducers');
export default combineReducers(reducers);