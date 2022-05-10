import React from 'react';

// import { SignInForm } from './SignInForm';
// import { SignUpForm } from './SignUpForm';
// import { ConfirmEMail } from './ConfirmEMail';
import { ConfirmPhone } from './ConfirmPhone';

import './Auth.scss';

export const Auth: React.FC = () => {
  return (
    <div className='auth__wrapper'>
      {/* <SignInForm /> */}

      {/* <SignUpForm /> */}

      {/* <ConfirmEMail /> */}

      <ConfirmPhone />
    </div>
  );
};
