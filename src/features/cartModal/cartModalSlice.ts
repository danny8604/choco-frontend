import { createSlice } from "@reduxjs/toolkit";

interface CartModalState {
  cartModalIsOpen: boolean;
}

const initialState: CartModalState = {
  cartModalIsOpen: false,
};

const cartModalSlice = createSlice({
  name: "cartModal",
  initialState,
  reducers: {
    openCartModal(state) {
      state.cartModalIsOpen = true;
    },
    closeCartModal(state) {
      state.cartModalIsOpen = false;
    },
  },
});

export const { openCartModal, closeCartModal } = cartModalSlice.actions;

export default cartModalSlice.reducer;
