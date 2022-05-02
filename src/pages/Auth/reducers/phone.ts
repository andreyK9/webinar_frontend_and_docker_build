import { createSlice } from '@reduxjs/toolkit';

const phone = createSlice({
  name: 'phone',
  initialState: {
    number: '',
    isValid: false,
    isLoading: false,
  },
  reducers: {
    confirm: state => {
      state.isLoading = true;
    },
    confirmSuccess: (state, action) => {
      state.isLoading = false;
      state.isValid = action.payload;
    },
    confirmFailure: state => {
      state.isLoading = false;
    },
    send: state => {
      state.isLoading = true;
    },
    sendSuccess: (state, action) => {
      state.isLoading = false;
      state.number = action.payload;
    },
    sendFailure: state => {
      state.isLoading = false;
    },
  },
});

export const { confirm, confirmFailure, confirmSuccess, send, sendFailure, sendSuccess } =
  phone.actions;

export default phone.reducer;
