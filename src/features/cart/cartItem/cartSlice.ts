import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ItemQuantity, ShoppingCartItem } from "../../../app/type";

interface CartState {
  shoppingCart: ShoppingCartItem[];
  shoppingCartTotalQuantity: number;
  shoppingCartTotalPrice: number;
  orderItems: ShoppingCartItem[];
  orderItemsTotalQuantity: number;
  orderItemsTotalPrice: number;
  orderNumber: string;
}

const initialState: CartState = {
  shoppingCart: [],
  shoppingCartTotalQuantity: 0,
  shoppingCartTotalPrice: 0,
  orderItems: [],
  orderItemsTotalQuantity: 0,
  orderItemsTotalPrice: 0,
  orderNumber: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.shoppingCart.find(
        (item) =>
          item.productId.productName === action.payload.productId.productName
      );

      itemInCart
        ? (itemInCart.quantity += action.payload.quantity)
        : state.shoppingCart.push(action.payload);
    },

    updateTotalPriceAndQuantity(state) {
      state.shoppingCartTotalPrice = state.shoppingCart.reduce(
        (accum, item) => accum + item.quantity * item.productId.price,
        0
      );
      state.shoppingCartTotalQuantity = state.shoppingCart.reduce(
        (accum, item) => accum + item.quantity,
        0
      );
    },
    updateItemQuantity(state, action) {
      const itemInCart = state.shoppingCart.find(
        (item) => item.productId.productName === action.payload.productName
      );

      itemInCart && (itemInCart.quantity = action.payload.quantity);
    },
    removeCartItem(state, action) {
      console.log(action.payload, "action.payload");
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.productId.productName !== action.payload
      );
    },
    resetShoppingCart(state) {
      state.shoppingCart = [];
    },
    userShoppingCart(state, action: PayloadAction<ShoppingCartItem[]>) {
      state.shoppingCart = action.payload;
    },
    checkoutCart(state) {
      state.orderItems = state.shoppingCart;
      state.orderItemsTotalPrice = state.shoppingCartTotalPrice;
      state.orderItemsTotalQuantity = state.shoppingCartTotalQuantity;
    },
    checkoutOrderNumber(state, action) {
      state.orderNumber = action.payload;
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
  checkoutCart,
  checkoutOrderNumber,
} = cartSlice.actions;

export default cartSlice.reducer;
