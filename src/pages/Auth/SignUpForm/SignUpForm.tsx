import React from 'react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { AuthTitle } from 'pages/Auth/AuthTitle';
import {
  CheckboxFiled,
  EmailField,
  PasswordField,
  TextField,
} from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';
import { ProblemMessage } from 'pages/Auth/ProblemMessage';
import { ReferralCode } from 'pages/Auth/ReferralCode';
import { useSignUp, useAuthCancel } from 'pages/Auth/hooks';

export const SignUpForm: React.FC = () => {
  const { t } = useTranslation();
  const signUp = useSignUp();
  const cancelAuth = useAuthCancel();

  return (
    <div className='auth__form'>
      <AuthTitle>{t('sign up form title')}</AuthTitle>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          personalAgree: '',
        }}
        onSubmit={signUp}
      >
        <Form className='auth__form-instance'>
          <TextField name='firstName' label={t('name field')} required />

          <TextField name='lastName' label={t('surname field')} required />

          <EmailField name='email' label={t('email field')} required />

          <PasswordField name='password' label={t('password field')} required />

          <ReferralCode />

          <CheckboxFiled name='personalAgree'>{t('personal Agree')}</CheckboxFiled>

          <ButtonForm type='submit'>{t('sign up submit button')}</ButtonForm>

          <ButtonForm onClick={cancelAuth}>{t('cancel button')}</ButtonForm>
        </Form>
      </Formik>

      <ProblemMessage />
    </div>
  );
};
