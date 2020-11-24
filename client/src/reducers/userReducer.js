import { decode } from "jsonwebtoken";

const userReducer = (state = false, action) => {
    switch(action.type) {
        case "IS_AUTH": 
            return {
                token: action.payload,
                id: decode(action.payload).id
            };
        case "IS_NOT_AUTH":
            return false;
        case "SET_USER_INFO":
            return {...state, ...action.payload};
        default: return state;
    }
}

export default userReducer;