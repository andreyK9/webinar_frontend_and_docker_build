import { createSlice } from '@reduxjs/toolkit';

const mailConfirm = createSlice({
  name: 'mailConfirm',
  initialState: {
    isConfirm: false,
    isLoading: false,
  },
  reducers: {
    confirmMail: state => {
      state.isLoading = true;
    },
    confirmMailSuccess: (state, action) => {
      state.isLoading = false;
      state.isConfirm = action.payload;
    },
    confirmMailFailure: state => {
      state.isLoading = false;
    },
  },
});

export const { confirmMail, confirmMailFailure, confirmMailSuccess } =
  mailConfirm.actions;

export default mailConfirm.reducer;
