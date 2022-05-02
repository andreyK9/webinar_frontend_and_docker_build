import React from 'react';
import { Form, Formik } from 'formik';

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
  const signUp = useSignUp();
  const cancelAuth = useAuthCancel();

  return (
    <div>
      <AuthTitle>SignUpForm</AuthTitle>

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
        <Form>
          <TextField name='firstName' />

          <TextField name='lastName' />

          <EmailField name='email' />

          <PasswordField name='password' />

          <ReferralCode />

          <CheckboxFiled name='personalAgree'>Personal Agree</CheckboxFiled>

          <ButtonForm>Sign up</ButtonForm>

          <ButtonForm onClick={cancelAuth}>Cancel</ButtonForm>
        </Form>
      </Formik>

      <ProblemMessage />
    </div>
  );
};
