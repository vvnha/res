import * as types from '../constants/ActionType';
var initialState = false;
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            return !state;
        default: return state;
    }
}
export default myReducer;