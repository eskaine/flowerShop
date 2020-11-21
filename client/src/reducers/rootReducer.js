
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    isAuth: loginReducer
});

export default rootReducer;