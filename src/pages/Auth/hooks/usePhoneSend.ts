import { useCallback } from 'react';

import { useAppDispatch } from 'store';
import { send } from 'pages/Auth/reducers/phone';
import { SubmitFunctionType } from 'pages/Auth/types';

export const usePhoneSend = (): SubmitFunctionType => {
  const dispatch = useAppDispatch();

  const sendPhone = useCallback(() => {
    dispatch(send());
  }, [dispatch]);

  return sendPhone;
};
