import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: { isLoading: false },
  reducers: {
    signIn: state => {
      state.isLoading = true;
    },
    signInSuccess: state => {
      state.isLoading = false;
    },
    signInFailure: state => {
      state.isLoading = false;
    },
    signUp: state => {
      state.isLoading = true;
    },
    signUpSuccess: state => {
      state.isLoading = false;
    },
    signUpFailure: state => {
      state.isLoading = false;
    },
  },
});

export const {
  signIn,
  signInFailure,
  signInSuccess,
  signUp,
  signUpFailure,
  signUpSuccess,
} = auth.actions;

export default auth.reducer;
