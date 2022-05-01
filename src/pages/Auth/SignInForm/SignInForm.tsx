import React from 'react';
import { Form, Formik } from 'formik';

import { AuthTitle } from '../AuthTitle';
import { CheckboxFiled, EmailField, PasswordField } from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';
import { ProblemMessage } from 'pages/Auth/ProblemMessage';
import { useSignUpOpen, useSignIn } from 'pages/Auth/hooks';

export const SignInForm: React.FC = () => {
  const onSubmit = useSignIn();
  const openSignUp = useSignUpOpen();

  return (
    <div>
      <AuthTitle>SignInForm</AuthTitle>

      <Formik initialValues={{}} onSubmit={onSubmit}>
        <Form>
          <EmailField name='email' />

          <PasswordField name='password' />

          <CheckboxFiled name='saveData' />

          <ButtonForm>Submit</ButtonForm>

          <ButtonForm onClick={openSignUp}>Sign Up</ButtonForm>
        </Form>
      </Formik>

      <ProblemMessage />
    </div>
  );
};
