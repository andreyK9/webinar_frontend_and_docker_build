import { useNavigate } from 'react-router-dom';

import { SignUpOpenFunctionType } from 'pages/Auth/types';

export const useSignUpOpen = (): SignUpOpenFunctionType => {
  const navigate = useNavigate();

  return () => {
    navigate('sign-up');
  };
};
