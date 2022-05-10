import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SignInForm } from 'pages/Auth/SignInForm';
import { SignUpForm } from 'pages/Auth/SignUpForm';
import { ConfirmEMail } from 'pages/Auth/ConfirmEMail';
import { ConfirmPhone } from 'pages/Auth/ConfirmPhone';

import './Auth.scss';

export const Auth: React.FC = () => {
  return (
    <div className='auth__wrapper'>
      <Routes>
        <Route index element={<SignInForm />} />

        <Route path='sign-up' element={<SignUpForm />} />
        <Route path='confirm-email' element={<ConfirmEMail />} />
        <Route path='confirm-phone' element={<ConfirmPhone />} />
      </Routes>
    </div>
  );
};
