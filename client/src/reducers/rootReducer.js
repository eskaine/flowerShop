
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    user: loginReducer
});

export default rootReducer;