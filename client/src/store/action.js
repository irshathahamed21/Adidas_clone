import { actionTypes } from "./actionTypes";

export const setProducts = (products) => (
    {
        type:actionTypes.SET_PRODCUT,
        payload:products
    }
)


export const selectProduct = (product) => (
    {
        type:actionTypes.SELECT_PRODUCT,
        payload:product
    }
)


export const removeProduct = () => (
    {
        type:actionTypes.REMOVE_SELECTED_PRODUCT,
    
    }
)

