import { setHandleWith } from 'helpers';
import React from 'react';

import { LanguageMenuItem } from '../LanguageMenuItem';
import { LanguageMenuProps } from '../types';
import { LANGUAGES } from './const';

import './LanguageMenu.scss';

export const LanguageMenu: React.FC<LanguageMenuProps> = ({ onChange }) => {
  return (
    <div className='language-menu'>
      {LANGUAGES.map(language => (
        <LanguageMenuItem
          key={language.name}
          onClick={setHandleWith(language, onChange)}
          {...language}
        />
      ))}
    </div>
  );
};
