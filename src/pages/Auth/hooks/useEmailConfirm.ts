import { useCallback } from 'react';

import { useAppDispatch } from 'store';
import { confirmMail } from 'pages/Auth/reducers/mailConfirm';
import { SubmitFunctionType } from 'pages/Auth/types';

export const useEmailConfirm = (): SubmitFunctionType => {
  const dispatch = useAppDispatch();

  const onConfirm = useCallback(() => {
    dispatch(confirmMail());
  }, [dispatch]);

  return onConfirm;
};
