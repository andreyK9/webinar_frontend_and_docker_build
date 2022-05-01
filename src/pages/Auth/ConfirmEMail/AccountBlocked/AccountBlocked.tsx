import React from 'react';

import { ErrorMessage } from 'components/Message';
import { AuthTitle } from 'pages/Auth/AuthTitle';
import { ButtonForm } from 'components/Buttons';
import { useAuthCancel } from 'pages/Auth/hooks';

export const AccountBlocked: React.FC = ({ children }) => {
  const cancel = useAuthCancel();

  return (
    <>
      <div>
        <AuthTitle>AccountBlocked</AuthTitle>

        <ErrorMessage title='title' description='description' />

        <ButtonForm onClick={cancel}>Ok</ButtonForm>
      </div>

      {children}
    </>
  );
};
