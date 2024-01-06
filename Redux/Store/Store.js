import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Reducers/CartReducer";
import ProductReducer from "../Reducers/ProductReducer";
import ProfileDetailsReducer from "../Reducers/ProfileDetailsReducer";

export default configureStore({
    reducer:{
        cart:CartReducer,
        product:ProductReducer,
        profile:ProfileDetailsReducer
    }
})