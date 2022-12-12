import { createSlice } from "@reduxjs/toolkit";

interface FormAuthSlice {
  emailValue: string;
  emailIsValid: boolean;
  emailIsTouched: boolean;
  passwordValue: string;
  passwordIsValid: boolean;
  passwordIsTouched: boolean;
  nameValue: string;
  nameIsValid: boolean;
  nameIsTouched: boolean;
  addressValue: string;
  addressIsValid: boolean;
  addressIsTouched: boolean;
  phoneValue: string;
  phoneIsValid: boolean;
  phoneIsTouched: boolean;
  formClean: boolean;
}

const initialState: FormAuthSlice = {
  emailValue: "",
  emailIsValid: false,
  emailIsTouched: false,
  passwordValue: "",
  passwordIsValid: false,
  passwordIsTouched: false,
  nameValue: "",
  nameIsValid: false,
  nameIsTouched: false,
  addressValue: "",
  addressIsValid: false,
  addressIsTouched: false,
  phoneValue: "",
  phoneIsValid: false,
  phoneIsTouched: false,
  formClean: false,
};

const formAuthSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    getEmail(state, action) {
      state.emailValue = action.payload;
    },
    emailValid(state, action) {
      state.emailIsValid = action.payload;
    },
    emailTouched(state, action) {
      state.emailIsTouched = action.payload;
    },
    getPassword(state, action) {
      state.passwordValue = action.payload;
    },
    passwordValid(state, action) {
      state.passwordIsValid = action.payload;
    },
    passwordTouched(state, action) {
      state.passwordIsTouched = action.payload;
    },
    getName(state, action) {
      state.nameValue = action.payload;
    },
    nameValid(state, action) {
      state.nameIsValid = action.payload;
    },
    nameTouched(state, action) {
      state.nameIsTouched = action.payload;
    },
    getAddress(state, action) {
      state.addressValue = action.payload;
    },
    addressValid(state, action) {
      state.addressIsValid = action.payload;
    },
    addressTouched(state, action) {
      state.addressIsTouched = action.payload;
    },
    getPhone(state, action) {
      state.phoneValue = action.payload;
    },
    phoneValid(state, action) {
      state.phoneIsValid = action.payload;
    },
    phoneTouched(state, action) {
      state.phoneIsTouched = action.payload;
    },
    resetFormState(state) {
      state.emailIsValid = false;
      state.emailIsTouched = false;
      state.passwordIsValid = false;
      state.passwordIsTouched = false;
      state.nameIsValid = false;
      state.nameIsTouched = false;
      state.addressIsValid = false;
      state.addressIsTouched = false;
      state.phoneIsValid = false;
      state.phoneIsTouched = false;
    },
    formCleaner(state) {
      state.formClean = !state.formClean;
    },
  },
});

export const {
  getEmail,
  emailValid,
  emailTouched,
  getPassword,
  passwordValid,
  passwordTouched,
  getName,
  nameValid,
  nameTouched,
  getAddress,
  addressValid,
  addressTouched,
  getPhone,
  phoneValid,
  phoneTouched,
  resetFormState,
  formCleaner,
} = formAuthSlice.actions;

export default formAuthSlice.reducer;
