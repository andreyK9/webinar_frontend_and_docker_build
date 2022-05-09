import React from 'react';

import { DropdownArrowProps } from '../types';
import { toggleModificator } from 'helpers';

import './DropdownArrow.scss';

const dropdownArrowBy = toggleModificator('dropdown-arrow', 'close', 'open');

export const DropdownArrow: React.FC<DropdownArrowProps> = ({ open, children }) => {
  return <div className={dropdownArrowBy(open)}>{children}</div>;
};
