import React from 'react';

import { Ru } from '../flags';
import { LanguageItemProps } from '../types';

import './LanguageMenuItem.scss';

export const LanguageMenuItem: React.FC<LanguageItemProps> = () => {
  return (
    <div className='language-menu-item'>
      <Ru />
      <div className='language-menu-item__description'>рус</div>
    </div>
  );
};
