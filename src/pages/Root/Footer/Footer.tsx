import React from 'react';
import { Trans } from 'react-i18next';

import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <p>
        <Trans>footer first description</Trans>
      </p>

      <p>
        <Trans>footer second description</Trans>
      </p>
    </div>
  );
};
