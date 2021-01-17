import * as types from '../constants/ActionType';

var cart_item = localStorage.getItem('cartid');
var initialState = cart_item ? cart_item : null;
const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.STORE_CARTID:
            var cartid = action.cartID;
            localStorage.setItem('cartid', cartid);
            return state;
        default: return state;
    }
}
export default cart;