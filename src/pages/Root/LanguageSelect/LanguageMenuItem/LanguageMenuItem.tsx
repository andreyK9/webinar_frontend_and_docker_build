import React from 'react';

import { mergeClasses } from 'helpers';
import { LanguageItemProps } from '../types';

import './LanguageMenuItem.scss';

export const LanguageMenuItem: React.FC<LanguageItemProps> = ({
  icon,
  name,
  className,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={mergeClasses('language-menu-item', className)}>
      {icon}
      <div className='language-menu-item__description'>{name}</div>
    </div>
  );
};
