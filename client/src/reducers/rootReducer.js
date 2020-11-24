
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import sidebarReducer from './sidebarReducer';

const rootReducer = combineReducers({
    user: userReducer,
    navToggle: sidebarReducer
});

export default rootReducer;