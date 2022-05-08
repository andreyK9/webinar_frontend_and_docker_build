import React from 'react';

import { Logo } from '../Logo';
import { LanguageSelect } from '../LanguageSelect';

import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className='header'>
      <Logo />

      <LanguageSelect />
    </div>
  );
};
