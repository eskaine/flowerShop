
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import sidebarReducer from './sidebarReducer';
import alertReducer from './alertReducer';

const rootReducer = combineReducers({
    user: userReducer,
    navToggle: sidebarReducer,
    alert: alertReducer
});

export default rootReducer;