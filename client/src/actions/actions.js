
export const isAuth = (token) => {
    return {
        type: "IS_AUTH",
        payload: token
    }
}

export const isNotAuth = () => {
    return {
        type: "IS_NOT_AUTH"
    }
}

export const disableSidebar = () => {
    return {
        type: "DISABLE_SIDEBAR"
    }
}

export const enableSidebar = () => {
    return {
        type: "ENABLE_SIDEBAR"
    }
}