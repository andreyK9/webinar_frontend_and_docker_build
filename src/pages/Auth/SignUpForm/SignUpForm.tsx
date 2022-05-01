import React from 'react';
import { Form, Formik } from 'formik';

import { AuthTitle } from '../AuthTitle';
import {
  CheckboxFiled,
  EmailField,
  PasswordField,
  TextField,
} from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';
import { ProblemMessage } from 'pages/Auth/ProblemMessage';
import { ReferralCode } from 'pages/Auth/ReferralCode';

export const SignUpForm: React.FC = () => {
  return (
    <div>
      <AuthTitle>SignUpForm</AuthTitle>

      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <TextField name='firstName' />

          <TextField name='lastName' />

          <EmailField name='email' />

          <PasswordField name='password' />

          <ReferralCode />

          <CheckboxFiled name='personalAgree'>Personal Agree</CheckboxFiled>

          <ButtonForm>Sign up</ButtonForm>
          <ButtonForm>Cancel</ButtonForm>
        </Form>

        <ProblemMessage />
      </Formik>
    </div>
  );
};
