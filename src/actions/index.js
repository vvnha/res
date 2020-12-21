import * as types from '../constants/ActionType';

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}
export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}
export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}
export const storeToken = (token) => {
    return {
        type: types.STORE_TOKEN,
        token
    }
}

export const storeCartId = (cartID) => {
    return {
        type: types.STORE_CARTID,
        cartID
    }
}