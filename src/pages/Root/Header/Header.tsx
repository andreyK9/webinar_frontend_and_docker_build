import React from 'react';

import { Logo } from '../Logo';
import { LanguageSelect } from '../LanguageSelect';

export const Header: React.FC = () => {
  return (
    <div>
      <Logo />

      <LanguageSelect />
    </div>
  );
};
