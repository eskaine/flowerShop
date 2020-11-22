
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

export const addToCart = (newItem) => {
    return {
        type: "ADD_TO_CART",
        payload: newItem
    }
}

export const removeFromCart = () => {
    return {
        type: "REMOVE_FROM_CART"
    }
}