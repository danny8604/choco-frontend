import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ItemQuantity, ShoppingCartItem } from "../../../app/type";

interface CartState {
  shoppingCart: ShoppingCartItem[];
  shoppingCartTotalQuantity: number;
  shoppingCartTotalPrice: number;
}

const initialState: CartState = {
  shoppingCart: localStorage.getItem("shopping-cart")
    ? JSON.parse(localStorage.getItem("shopping-cart") || "")
    : [],
  shoppingCartTotalQuantity: 0,
  shoppingCartTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ShoppingCartItem>) {
      const itemInCart = state.shoppingCart.find(
        (item) => item.id === action.payload.id
      );

      itemInCart
        ? (itemInCart.quantity += action.payload.quantity)
        : state.shoppingCart.push(action.payload);
    },
    updateTotalPriceAndQuantity(state) {
      state.shoppingCartTotalPrice = state.shoppingCart.reduce(
        (accum, item) => accum + item.quantity * item.price,
        0
      );
      state.shoppingCartTotalQuantity = state.shoppingCart.reduce(
        (accum, item) => accum + item.quantity,
        0
      );
    },
    updateItemQuantity(state, action: PayloadAction<ItemQuantity>) {
      const itemInCart = state.shoppingCart.find(
        (item) => item.id === action.payload.id
      );

      itemInCart && (itemInCart.quantity = action.payload.quantity);
    },
    removeCartItem(state, action) {
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.id !== action.payload
      );
    },
    resetShoppingCart(state) {
      state.shoppingCart = [];
    },
    userShoppingCart(state, action: PayloadAction<ShoppingCartItem[]>) {
      state.shoppingCart = action.payload;
    },
  },
});

export const {
  addToCart,
  removeCartItem,
  updateItemQuantity,
  updateTotalPriceAndQuantity,
  userShoppingCart,
  resetShoppingCart,
} = cartSlice.actions;

export default cartSlice.reducer;
