const sidebarReducer = (state = false, action) => {
    switch(action.type) {
        case "ENABLE_SIDEBAR": 
            return true;
        case "DISABLE_SIDEBAR":
            return false;
        default: return state;
    }
}

export default sidebarReducer;