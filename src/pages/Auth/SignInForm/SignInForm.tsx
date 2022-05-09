import React from 'react';
import { Form, Formik } from 'formik';
import { Trans, Translation } from 'react-i18next';

import { AuthTitle } from '../AuthTitle';
import { CheckboxFiled, EmailField, PasswordField } from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';
import { ProblemMessage } from 'pages/Auth/ProblemMessage';
import { useSignUpOpen, useSignIn } from 'pages/Auth/hooks';

export const SignInForm: React.FC = () => {
  const onSubmit = useSignIn();
  const openSignUp = useSignUpOpen();

  return (
    <div className='auth__form'>
      <AuthTitle>
        <Translation>{t => t('sign in form title')}</Translation>
      </AuthTitle>

      <Formik
        initialValues={{
          email: '',
          password: '',
          saveData: '',
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <EmailField name='email' />

          <PasswordField name='password' />

          <CheckboxFiled name='saveData' />

          <ButtonForm>
            <Trans>submit button</Trans>
          </ButtonForm>

          <ButtonForm onClick={openSignUp}>
            <Trans>sign up button</Trans>
          </ButtonForm>
        </Form>
      </Formik>

      <ProblemMessage />
    </div>
  );
};
