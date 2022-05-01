import React from 'react';

import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { ConfirmEMail } from './ConfirmEMail';
import { ConfirmPhone } from './ConfirmPhone';

export const Auth: React.FC = () => {
  return (
    <div>
      <SignInForm />

      <SignUpForm />

      <ConfirmEMail />

      <ConfirmPhone />
    </div>
  );
};
