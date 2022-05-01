import { Form, Formik } from 'formik';
import React from 'react';

import { ConfirmDescription } from 'pages/Auth/Description';
import { PhoneField, ReadOnlyField } from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';

export const EnterLastNumbers: React.FC = () => {
  return (
    <>
      <ConfirmDescription>first</ConfirmDescription>

      <ConfirmDescription>second</ConfirmDescription>

      <ConfirmDescription>third</ConfirmDescription>

      <ReadOnlyField name='phone' />

      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <PhoneField name='lastWords' />

          <ButtonForm>Submit</ButtonForm>

          <ButtonForm>Repeat</ButtonForm>

          <ButtonForm>Cancel</ButtonForm>
        </Form>
      </Formik>
    </>
  );
};
