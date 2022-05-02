import { useCallback } from 'react';

import { useAppDispatch } from 'store';
import { confirm } from 'pages/Auth/reducers/phone';
import { SubmitFunctionType } from 'pages/Auth/types';

export const usePhoneConfirm = (): SubmitFunctionType => {
  const dispatch = useAppDispatch();

  const onConfirm = useCallback(() => {
    dispatch(confirm());
  }, [dispatch]);

  return onConfirm;
};
