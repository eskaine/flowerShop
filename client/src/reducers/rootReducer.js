
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
    user: loginReducer,
    cart: cartReducer
});

export default rootReducer;