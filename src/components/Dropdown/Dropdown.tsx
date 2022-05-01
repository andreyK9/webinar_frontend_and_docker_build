import React from 'react';

import { DropdownProps } from './types';

export const Dropdown: React.FC<DropdownProps> = ({ content, children }) => {
  return (
    <div>
      {children}

      <div>{content}</div>
    </div>
  );
};
