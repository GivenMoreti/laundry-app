import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        product: [],
    },
    reducers: {
        getProducts: (state, action) => {
            state.product.push( ...action.payload );
        },
        incrementProductQuantity: (state, action) => {
            const itemPresent = state.product.find(
                (item) => item.id === action.payload.id
            );
            if (itemPresent) {
                itemPresent.quantity++;
            }
        },
        decrementProductQuantity:  (state, action) => {
            const itemPresent = state.product.find(
                (item) => item.id === action.payload.id
            );
            if (itemPresent) {
                if (itemPresent.quantity === 1) {
                    state.product = state.product.filter(
                        (item) => item.id !== action.payload.id
                    );
                } else {
                    itemPresent.quantity--;
                }
            }
        }
    }
})

export const { getProducts, incrementProductQuantity, decrementProductQuantity } = productSlice.actions;
export default productSlice.reducer;