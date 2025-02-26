import React from 'react';
import { Form, Formik } from 'formik';
import { t } from 'i18next';
import * as Yup from 'yup';

import { AuthTitle } from '../AuthTitle';
import { CheckboxFiled, EmailField, PasswordField } from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';
import { ProblemMessage } from 'pages/Auth/ProblemMessage';
import { useSignUpOpen, useSignIn } from 'pages/Auth/hooks';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

export const SignInForm: React.FC = () => {
  const onSubmit = useSignIn();
  const openSignUp = useSignUpOpen();

  return (
    <div className='auth__form'>
      <AuthTitle>{t('sign in form title')}</AuthTitle>

      <Formik
        initialValues={{
          email: '',
          password: '',
          saveData: '',
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={onSubmit}
      >
        <Form className='auth__form-instance'>
          <EmailField name='email' label={t('email field')} required />

          <PasswordField name='password' label={t('password field')} required />

          <CheckboxFiled name='saveData'>{t('sign in form checkbox')}</CheckboxFiled>

          <ButtonForm type='submit'>{t('submit button')}</ButtonForm>

          <ButtonForm onClick={openSignUp}>{t('sign up button')}</ButtonForm>
        </Form>
      </Formik>

      <ProblemMessage />
    </div>
  );
};
