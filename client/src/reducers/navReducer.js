const navReducer = (state = false, action) => {
    switch(action.type) {
        case "NAV_OPEN": 
            return true;
        case "NAV_CLOSE":
            return false;
        default: return state;
    }
}

export default navReducer;