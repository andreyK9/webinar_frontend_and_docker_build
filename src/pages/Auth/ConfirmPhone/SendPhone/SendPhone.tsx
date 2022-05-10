import React from 'react';
import { Form, Formik } from 'formik';
import { t } from 'i18next';

import { ConfirmDescription } from 'pages/Auth/Description';
import { PhoneField } from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';
import { useAuthCancel, usePhoneSend } from 'pages/Auth/hooks';

export const SendPhone: React.FC = () => {
  const sendPhone = usePhoneSend();
  const cancel = useAuthCancel();

  return (
    <>
      <Formik initialValues={{ phone: '' }} onSubmit={sendPhone}>
        <Form className='auth__form-instance'>
          <ConfirmDescription>{t('confirm phone fist description')}</ConfirmDescription>

          <ConfirmDescription>{t('confirm phone second description')}</ConfirmDescription>

          <PhoneField required name='phone' label={t('phone field')} />

          <ButtonForm disabled type='submit'>
            {t('need call button')}
          </ButtonForm>

          <ButtonForm onClick={cancel}>{t('cancel button')}</ButtonForm>
        </Form>
      </Formik>
    </>
  );
};
