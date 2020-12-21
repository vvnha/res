import { combineReducers } from 'redux';
import isDisplayForm from './isDisplayForm';
import foods from './foods';
import tokens from './token';
import cart from './cart';

const myReducer = combineReducers({
    isDisplayForm,
    foods,
    tokens,
    tokens,
    cart
});

export default myReducer;