import { useCallback } from 'react';

import { useAppDispatch } from 'store';
import { signIn } from 'pages/Auth/reducers/auth';
import { SubmitFunctionType } from 'pages/Auth/types';

export const useSignIn = (): SubmitFunctionType => {
  const dispatch = useAppDispatch();

  const signInAuth = useCallback(() => {
    dispatch(signIn());
  }, [dispatch]);

  return signInAuth;
};
