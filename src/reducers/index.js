import { combineReducers } from 'redux';
import isDisplayForm from './isDisplayForm';
import foods from './foods';
import tokens from './token';
import cart from './cart';
import user from './user';

const myReducer = combineReducers({
    isDisplayForm,
    foods,
    tokens,
    tokens,
    cart,
    user
});

export default myReducer;