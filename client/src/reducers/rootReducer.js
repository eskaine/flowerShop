
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import sidebarReducer from './sidebarReducer';

const rootReducer = combineReducers({
    user: loginReducer,
    navToggle: sidebarReducer
});

export default rootReducer;