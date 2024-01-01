import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Reducers/CartReducer";
import ProductReducer from "../Reducers/ProductReducer";

export default configureStore({
    reducer:{
        cart:CartReducer,
        product:ProductReducer
    }
})