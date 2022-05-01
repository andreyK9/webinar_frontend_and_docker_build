import React from 'react';
import { Form, Formik } from 'formik';

import { AccountBlocked } from './AccountBlocked';
import { AuthTitle } from 'pages/Auth/AuthTitle';
import { ConfirmDescription } from 'pages/Auth/Description';
import { ProblemMessage } from 'pages/Auth/ProblemMessage';
import { ReadOnlyField, TextField } from 'components/FormFields';
import { ButtonForm } from 'components/Buttons';
import { useEmailConfirm, useAuthCancel } from 'pages/Auth/hooks';

export const ConfirmEMail: React.FC = () => {
  const confirmEMail = useEmailConfirm();
  const cancelAuth = useAuthCancel();

  return (
    <div>
      <AccountBlocked>
        <AuthTitle>ConfirmMail</AuthTitle>

        <ConfirmDescription>ConfirmDescription</ConfirmDescription>

        <ReadOnlyField name='email' />

        <Formik initialValues={{}} onSubmit={confirmEMail}>
          <Form>
            <TextField name='codeFromMail' />

            <ButtonForm>Confirm</ButtonForm>

            <ButtonForm onClick={cancelAuth}>Cancel</ButtonForm>
          </Form>
        </Formik>

        <ProblemMessage />
      </AccountBlocked>
    </div>
  );
};
