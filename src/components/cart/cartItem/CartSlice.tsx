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

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ShoppingCartItem>) {
      const itemInCart = state.shoppingCart.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
      }
      if (!itemInCart) {
        state.shoppingCart.push(action.payload);
      }
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
      if (itemInCart) {
        itemInCart.quantity = action.payload.quantity;
      }
    },
    removeCartItem(state, action) {
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.id !== action.payload
      );
    },
    local(state, action) {
      state.shoppingCart.push(action.payload);
    },
  },
});

export const {
  addToCart,
  removeCartItem,
  updateItemQuantity,
  updateTotalPriceAndQuantity,
  local,
} = CartSlice.actions;

export default CartSlice.reducer;
