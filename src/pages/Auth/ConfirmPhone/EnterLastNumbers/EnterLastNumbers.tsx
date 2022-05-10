import React from 'react';
import { Form, Formik } from 'formik';
import { t } from 'i18next';

import { ConfirmDescription } from 'pages/Auth/Description';
import { PhoneField, ReadOnlyField } from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';
import { useAuthCancel, usePhoneConfirm } from 'pages/Auth/hooks';

export const EnterLastNumbers: React.FC = () => {
  const confirmPhone = usePhoneConfirm();
  const cancel = useAuthCancel();

  return (
    <>
      <Formik
        initialValues={{ phone: '+7 (123) 456 78 90', lastWords: '' }}
        onSubmit={confirmPhone}
      >
        <Form className='auth__form-instance'>
          <ConfirmDescription>
            {t('phone verification fist description')}
          </ConfirmDescription>

          <ConfirmDescription>
            {t('phone verification second description')}
          </ConfirmDescription>

          <ConfirmDescription>
            {t('phone verification third description')}
          </ConfirmDescription>

          <ReadOnlyField name='phone' label={t('phone field')} />

          <PhoneField required name='lastWords' label={t('lase numbbers field')} />

          <ButtonForm primary type='submit'>
            {t('confirm button')}
          </ButtonForm>

          <ButtonForm>{t('repeat button')}</ButtonForm>

          <ButtonForm onClick={cancel}>{t('cancel button')}</ButtonForm>
        </Form>
      </Formik>
    </>
  );
};
