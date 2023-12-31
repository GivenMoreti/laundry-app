import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Reducers/CartReducer";

export default configureStore({
    reducer:{
        cart:CartReducer
    }
})