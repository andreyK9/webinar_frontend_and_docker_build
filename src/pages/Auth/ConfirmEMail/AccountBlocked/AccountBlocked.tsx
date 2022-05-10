import React from 'react';
import { useTranslation } from 'react-i18next';

import { ErrorMessage } from 'components/Message';
import { AuthTitle } from 'pages/Auth/AuthTitle';
import { ButtonForm } from 'components/Buttons';
import { useAuthCancel } from 'pages/Auth/hooks';
import { AccountBlockedProps } from './types';

export const AccountBlocked: React.FC<AccountBlockedProps> = ({
  children,
  isBlocked,
}) => {
  const { t } = useTranslation();
  const cancel = useAuthCancel();

  if (!isBlocked) return <>{children}</>;

  return (
    <>
      <AuthTitle>{t('confirm mail form title')}</AuthTitle>

      <ErrorMessage
        title={t('confirm mail error title')}
        description={t('confirm mail error description')}
      />

      <ButtonForm primary onClick={cancel}>
        {t('ok button')}
      </ButtonForm>
    </>
  );
};
