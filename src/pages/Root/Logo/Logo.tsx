import React from 'react';

import { useMoveToRoot } from './hooks';
import LogoIcon from './logo.svg';
import LogoMobileIcon from './logo.mobile.svg';

import './Logo.scss';

export const Logo: React.FC = () => {
  const moveToRoot = useMoveToRoot();

  return (
    <div className='logo' onClick={moveToRoot}>
      <LogoIcon />

      <LogoMobileIcon />
    </div>
  );
};
