import * as types from '../constants/ActionType';
var userinfo = localStorage.getItem('user');
var initialState = userinfo ? userinfo : [];
const user = (state = initialState, action) => {
    switch (action.type) {
        case types.STORE_USER:
            var userInfo = action.user;
            localStorage.setItem('user', JSON.stringify(userInfo));
            return state;
        default: return [...state];
    }
}
export default user;