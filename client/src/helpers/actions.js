
export const isAuth = (payload) => {
    return {
        type: "IS_AUTH",
        payload: payload
    }
}

export const isNotAuth = () => {
    return {
        type: "IS_NOT_AUTH"
    }
}

export const enableSidebar = () => {
    return {
        type: "ENABLE_SIDEBAR"
    }
}

export const disableSidebar = () => {
    return {
        type: "DISABLE_SIDEBAR"
    }
}

export const setUserInfo = (payload) => {
    return {
        type: "SET_USER_INFO",
        payload: payload
    }
}

export const showAlert = (payload) => {
    return {
        type: "SHOW_ALERT",
        payload: payload
    }
}

export const hideAlert = () => {
    return {
        type: "HIDE_ALERT"
    }
}