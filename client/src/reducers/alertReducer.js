const initialState = {
    show: false,
    variant: "success",
    message: ""
};

const alertReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SHOW_ALERT": 
            return {...action.payload, show: true};
        case "HIDE_ALERT":
            return {...state, show: false};
        default: return state;
    }
}

export default alertReducer;