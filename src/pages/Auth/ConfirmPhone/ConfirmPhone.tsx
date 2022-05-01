import React from 'react';

import { SendPhone } from './SendPhone';
import { EnterLastNumbers } from './EnterLastNumbers';
import { AuthTitle } from '../AuthTitle';
import { ProblemMessage } from '../ProblemMessage';

export const ConfirmPhone: React.FC = () => {
  return (
    <div>
      <AuthTitle>ConfirmPhone</AuthTitle>

      <SendPhone />

      <EnterLastNumbers />

      <ProblemMessage />
    </div>
  );
};
