import { Form, Formik } from 'formik';
import React from 'react';

import { ConfirmDescription } from 'pages/Auth/Description';
import { PhoneField } from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';

export const SendPhone: React.FC = () => {
  return (
    <>
      <ConfirmDescription>first</ConfirmDescription>

      <ConfirmDescription>second</ConfirmDescription>

      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <PhoneField name='phone' />

          <ButtonForm>Submit</ButtonForm>

          <ButtonForm>Cancel</ButtonForm>
        </Form>
      </Formik>
    </>
  );
};
