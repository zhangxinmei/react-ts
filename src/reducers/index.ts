import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
export default combineReducers<RootState>({
  routing: routerReducer
});
