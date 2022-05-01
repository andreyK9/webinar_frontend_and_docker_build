import React from 'react';
import { Form, Formik } from 'formik';

import { AuthTitle } from '../AuthTitle';
import { ConfirmDescription } from './Description';
import { ReadOnlyField, TextField } from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';
import { ProblemMessage } from '../ProblemMessage';
import { AccountBlocked } from './AccountBlocked';

export const ConfirmEMail: React.FC = () => {
  return (
    <div>
      <AccountBlocked>
        <AuthTitle>ConfirmMail</AuthTitle>

        <ConfirmDescription>ConfirmDescription</ConfirmDescription>

        <ReadOnlyField name='email' />

        <Formik initialValues={{}} onSubmit={() => {}}>
          <Form>
            <TextField name='codeFromMail' />

            <ButtonForm>Confirm</ButtonForm>

            <ButtonForm>Cancel</ButtonForm>
          </Form>
        </Formik>

        <ProblemMessage />
      </AccountBlocked>
    </div>
  );
};
