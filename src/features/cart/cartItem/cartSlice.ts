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
  orderName: string;
  orderAddress: string;
  orderPhone: string;
  orderDate: Date | undefined;
}

const initialState: CartState = {
  shoppingCart: [],
  shoppingCartTotalQuantity: 0,
  shoppingCartTotalPrice: 0,
  orderItems: [],
  orderItemsTotalQuantity: 0,
  orderItemsTotalPrice: 0,
  orderNumber: "",
  orderName: "",
  orderAddress: "",
  orderPhone: "",
  orderDate: undefined,
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
    resetShoppingCart(state) {
      state.shoppingCart = [];
    },
    userShoppingCart(state, action: PayloadAction<ShoppingCartItem[]>) {
      state.shoppingCart = action.payload;

      state.shoppingCartTotalPrice = state.shoppingCart.reduce(
        (accum, item) => accum + item.quantity * item.productId.price,
        0
      );
      state.shoppingCartTotalQuantity = state.shoppingCart.reduce(
        (accum, item) => accum + item.quantity,
        0
      );
    },
    checkoutCart(state, action) {
      state.orderItems = state.shoppingCart;
      state.orderItemsTotalPrice = state.shoppingCartTotalPrice;
      state.orderItemsTotalQuantity = state.shoppingCartTotalQuantity;
      state.orderNumber = action.payload.orderNumber;
      state.orderName = action.payload.orderName;
      state.orderAddress = action.payload.orderAddress;
      state.orderPhone = action.payload.orderPhone;
      state.orderDate = action.payload.orderDate;
    },
  },
});

export const {
  addToCart,
  updateItemQuantity,
  updateTotalPriceAndQuantity,
  userShoppingCart,
  resetShoppingCart,
  checkoutCart,
} = cartSlice.actions;

export default cartSlice.reducer;
