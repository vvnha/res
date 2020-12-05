import * as types from '../constants/ActionType';

var tokenData = localStorage.getItem('token');
var initialState = tokenData ? tokenData : "";
const tokens = (state = initialState, action) => {
    switch (action.type) {
        case types.STORE_TOKEN:
            var token = action.token;
            state = token;
            localStorage.setItem('token', JSON.stringify(state));
            return state;
        default: return state;
    }
}
export default tokens;