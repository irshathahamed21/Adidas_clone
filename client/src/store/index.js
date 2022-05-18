import {combineReducers} from "redux";
import { Productreducer, selectedProductReducer } from "./reducer";


export const reducers = combineReducers({
    allProducts:Productreducer,
    selectedProduct:selectedProductReducer
})

