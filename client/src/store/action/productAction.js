import axios from "axios";

import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
    
} from "../actionTypes"


export const getProduct = async(dispatch)=> {

    try {
        dispatch(
            {type:ALL_PRODUCT_REQUEST }
        )

        const {data} = await axios.get()
        dispatch(  {
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })

    }
    catch(error) {
            dispatch({
                type:ALL_PRODUCT_FAIL,
                data:error.response.data
            })
     

    } 
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };


