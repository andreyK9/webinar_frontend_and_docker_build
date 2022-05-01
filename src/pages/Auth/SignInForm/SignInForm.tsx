import React from 'react';
import { Form, Formik } from 'formik';

import { AuthTitle } from '../AuthTitle';
import { EmailField, PasswordField } from 'components/FormFields';
import { CheckboxFiled } from 'components/FormFields/Checkbox';
import { ButtonForm } from 'components/Buttons';
import { ProblemMessage } from './ProblemMessage';

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
