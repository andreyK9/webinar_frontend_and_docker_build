import React from 'react';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { AccountBlocked } from './AccountBlocked';
import { AuthTitle } from 'pages/Auth/AuthTitle';
import { ConfirmDescription } from 'pages/Auth/Description';
import { ProblemMessage } from 'pages/Auth/ProblemMessage';
import { ReadOnlyField, TextField } from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';
import { useEmailConfirm, useAuthCancel } from 'pages/Auth/hooks';

export const ConfirmEMail: React.FC = () => {
  const { t } = useTranslation();
  const confirmEMail = useEmailConfirm();
  const cancelAuth = useAuthCancel();

  return (
    <div className='auth__form'>
      <AccountBlocked isBlocked={true}>
        <AuthTitle>{t('confirm mail form title')}</AuthTitle>

        <ConfirmDescription>{t('confirm mail description')}</ConfirmDescription>

        <Formik
          initialValues={{ email: 'ololo11@gmail.com', codeFromMail: '' }}
          onSubmit={confirmEMail}
        >
          <Form className='auth__form-instance'>
            <ReadOnlyField name='email' label={t('email field')} />

            <TextField name='codeFromMail' label={t('from email code')} />

            <ButtonForm disabled type='submit'>
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
