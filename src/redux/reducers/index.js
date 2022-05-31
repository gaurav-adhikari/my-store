import { combineReducers } from 'redux';
import { productsReducer, selectedProductReducer } from './productReducer';

const reducers = combineReducers
    ({ allProducts: productsReducer, selectedProduct: selectedProductReducer },)


export default reducers;