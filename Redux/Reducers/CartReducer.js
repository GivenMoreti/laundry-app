import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const cartItemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (cartItemPresent) {
        cartItemPresent.quantity++;
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeItem;
    },
    //for plus button
    incrementQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      itemPresent.quantity++;
    },
    //for minus button
    decrementQuantity: (state, action) => {
      const itemPresent = state.cart.find(
          (item) => item.id === action.payload.id
      );
      if (itemPresent) {
          if (itemPresent.quantity === 1) {
              state.cart = state.cart.filter(
                  (item) => item.id !== action.payload.id
              );
          } else {
              itemPresent.quantity--;
          }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
