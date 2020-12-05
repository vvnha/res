import { combineReducers } from 'redux';
import isDisplayForm from './isDisplayForm';
import foods from './foods';
import tokens from './token';

const myReducer = combineReducers({
    isDisplayForm,
    foods,
    tokens
});

export default myReducer;