import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthCancelFunctionType } from 'pages/Auth/types';

export const useAuthCancel = (): AuthCancelFunctionType => {
  const navigate = useNavigate();

  const onCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return onCancel;
};
