import { Form, Formik } from 'formik';
import React from 'react';

import { ConfirmDescription } from 'pages/Auth/Description';
import { PhoneField } from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';
import { useAuthCancel, usePhoneSend } from 'pages/Auth/hooks';

export const SendPhone: React.FC = () => {
  const sendPhone = usePhoneSend();
  const cancel = useAuthCancel();

  return (
    <>
      <ConfirmDescription>first</ConfirmDescription>

      <ConfirmDescription>second</ConfirmDescription>

      <Formik initialValues={{}} onSubmit={sendPhone}>
        <Form>
          <PhoneField name='phone' />

          <ButtonForm>Submit</ButtonForm>

          <ButtonForm onClick={cancel}>Cancel</ButtonForm>
        </Form>
      </Formik>
    </>
  );
};
