import React from 'react';
import { Trans } from 'react-i18next';

import './ProblemMessage.scss';

export const ProblemMessage: React.FC = () => {
  return (
    <p className='problem-message'>
      <Trans>problem message</Trans>
    </p>
  );
};
