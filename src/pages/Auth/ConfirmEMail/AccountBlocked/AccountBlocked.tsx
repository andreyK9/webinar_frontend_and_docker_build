import React from 'react';

import { ErrorMessage } from 'components/Message';
import { AuthTitle } from 'pages/Auth/AuthTitle';
import { ButtonForm } from 'components/Buttons';

export const AccountBlocked: React.FC = ({ children }) => {
  return (
    <>
      <div>
        <AuthTitle>AccountBlocked</AuthTitle>

        <ErrorMessage title='title' description='description' />

        <ButtonForm>Ok</ButtonForm>
      </div>

      {children}
    </>
  );
};
