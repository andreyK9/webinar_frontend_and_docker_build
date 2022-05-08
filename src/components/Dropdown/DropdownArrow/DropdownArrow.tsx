import React, { useMemo } from 'react';

import { DropdownArrowProps } from '../types';

import './DropdownArrow.scss';

export const DropdownArrow: React.FC<DropdownArrowProps> = ({ open, children }) => {
  const className = useMemo(
    () => `dropdown-arrow ${open ? 'dropdown-arrow--open' : 'dropdown-arrow--close'}`,
    [open],
  );

  return <div className={className}>{children}</div>;
};
