import { SubmitFunctionType } from 'pages/Auth/types';
import { useCallback } from 'react';
import { useAppDispatch } from 'store';
import { signUp } from '../reducers/auth';

export const useSignUp = (): SubmitFunctionType => {
  const dispatch = useAppDispatch();

  const signUpAuth = useCallback(() => {
    dispatch(signUp());
  }, [dispatch]);

  return signUpAuth;
};
