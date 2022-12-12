import { createSlice } from "@reduxjs/toolkit";

interface DesignerModalState {
  designerModalIsOpen: boolean;
}

const initialState: DesignerModalState = {
  designerModalIsOpen: false,
};

const designerModalSlice = createSlice({
  name: "designerModal",
  initialState,
  reducers: {
    openDesignerModal(state) {
      state.designerModalIsOpen = true;
    },
    closeDesignerModal(state) {
      state.designerModalIsOpen = false;
    },
  },
});

export const { openDesignerModal, closeDesignerModal } =
  designerModalSlice.actions;

export default designerModalSlice.reducer;
