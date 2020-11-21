const loginReducer = (state = false, action) => {
    switch(action.type) {
        case "IS_AUTH": 
            return true;
        case "IS_NOT_AUTH":
            return false;
        default: return state;
    }
}

export default loginReducer;