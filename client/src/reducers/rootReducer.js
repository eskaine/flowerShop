
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import cartReducer from './cartReducer';
import sidebarReducer from './sidebarReducer';

const rootReducer = combineReducers({
    user: loginReducer,
    cart: cartReducer,
    navToggle: sidebarReducer
});

export default rootReducer;