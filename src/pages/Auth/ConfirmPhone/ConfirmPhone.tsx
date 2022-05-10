import React from 'react';
import { t } from 'i18next';

import { SendPhone } from './SendPhone';
// import { EnterLastNumbers } from './EnterLastNumbers';
import { AuthTitle } from '../AuthTitle';
// import { ProblemMessage } from '../ProblemMessage';

export const ConfirmPhone: React.FC = () => {
  return (
    <div className='auth__form'>
      <AuthTitle>{t('confirm phone form title')}</AuthTitle>

      <SendPhone />

      {/* <EnterLastNumbers /> */}

      {/* <ProblemMessage /> */}
    </div>
  );
};
