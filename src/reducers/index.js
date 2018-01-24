import { combineReducers } from 'redux';
import LibReducer from './LibReducer';

export default combineReducers({
  libraries: LibReducer
});
