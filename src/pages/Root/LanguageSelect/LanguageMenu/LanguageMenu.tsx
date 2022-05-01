import React from 'react';

import { LanguageMenuItem } from '../LanguageMenuItem';
import { LanguageMenuProps } from '../types';
import { LANGUAGES } from './const';

export const LanguageMenu: React.FC<LanguageMenuProps> = () => {
  return (
    <div>
      {LANGUAGES.map(language => (
        <LanguageMenuItem {...language} />
      ))}
    </div>
  );
};
