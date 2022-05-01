import React from 'react';
import { Form, Formik } from 'formik';

import { AuthTitle } from '../AuthTitle';
import { CheckboxFiled, EmailField, PasswordField } from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';
import { ProblemMessage } from 'pages/Auth/ProblemMessage';

export const SignInForm: React.FC = () => {
  return (
    <div>
      <AuthTitle>SignInForm</AuthTitle>

      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <EmailField name='email' />

          <PasswordField name='password' />

          <CheckboxFiled name='saveData' />

          <ButtonForm>Submit</ButtonForm>

          <ButtonForm>Sign Up</ButtonForm>
        </Form>
      </Formik>

      <ProblemMessage />
    </div>
  );
};
