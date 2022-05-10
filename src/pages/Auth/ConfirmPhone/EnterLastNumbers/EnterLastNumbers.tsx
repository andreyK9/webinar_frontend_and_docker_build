import { Form, Formik } from 'formik';
import React from 'react';

import { ConfirmDescription } from 'pages/Auth/Description';
import { PhoneField, ReadOnlyField } from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';
import { useAuthCancel, usePhoneConfirm } from 'pages/Auth/hooks';

export const EnterLastNumbers: React.FC = () => {
  const confirmPhone = usePhoneConfirm();
  const cancel = useAuthCancel();

  return (
    <>
      <ConfirmDescription>first</ConfirmDescription>

      <ConfirmDescription>second</ConfirmDescription>

      <ConfirmDescription>third</ConfirmDescription>

      <Formik initialValues={{ lastWords: '' }} onSubmit={confirmPhone}>
        <Form>
          <ReadOnlyField name='phone' />

          <PhoneField name='lastWords' />

          <ButtonForm>Submit</ButtonForm>

          <ButtonForm>Repeat</ButtonForm>

          <ButtonForm onClick={cancel}>Cancel</ButtonForm>
        </Form>
      </Formik>
    </>
  );
};
