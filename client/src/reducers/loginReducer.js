import { decode } from "jsonwebtoken";

const loginReducer = (state = false, action) => {
    switch(action.type) {
        case "IS_AUTH": 
            return {
                token: action.payload,
                id: decode(action.payload).id
            };
        case "IS_NOT_AUTH":
            return false;
        default: return state;
    }
}

export default loginReducer;