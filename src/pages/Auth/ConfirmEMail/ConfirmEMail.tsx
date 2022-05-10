import React from 'react';
import { Form, Formik } from 'formik';
import { t } from 'i18next';

import { AccountBlocked } from './AccountBlocked';
import { AuthTitle } from 'pages/Auth/AuthTitle';
import { ConfirmDescription } from 'pages/Auth/Description';
import { ProblemMessage } from 'pages/Auth/ProblemMessage';
import { ReadOnlyField, TextField } from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';
import { useEmailConfirm, useAuthCancel } from 'pages/Auth/hooks';
import { useNavigate } from 'react-router-dom';

export const ConfirmEMail: React.FC = () => {
  const navigate = useNavigate();
  const confirmEMail = useEmailConfirm();
  const cancelAuth = useAuthCancel();

  return (
    <div className='auth__form'>
      <AccountBlocked isBlocked={false}>
        <AuthTitle>{t('confirm mail form title')}</AuthTitle>

        <ConfirmDescription>{t('confirm mail description')}</ConfirmDescription>

        <Formik
          initialValues={{ email: 'ololo11@gmail.com', codeFromMail: '' }}
          onSubmit={confirmEMail}
        >
          <Form className='auth__form-instance'>
            <ReadOnlyField name='email' label={t('email field')} />

            <TextField name='codeFromMail' label={t('from email code')} />

            <ButtonForm onClick={() => navigate('/auth/confirm-phone')}>
              {t('confirm button')}
            </ButtonForm>

            <ButtonForm onClick={cancelAuth}>{t('cancel button')}</ButtonForm>
          </Form>
        </Formik>

        <ProblemMessage />
      </AccountBlocked>
    </div>
  );
};
