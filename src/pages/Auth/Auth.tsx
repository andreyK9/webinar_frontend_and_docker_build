import React from 'react';

import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { ConfirmMail } from './ConfirmMail';
import { ConfirmPhone } from './ConfirmPhone';

export const Auth: React.FC = () => {
  return (
    <div>
      <SignInForm />

      <SignUpForm />

      <ConfirmMail />

      <ConfirmPhone />
    </div>
  );
};
