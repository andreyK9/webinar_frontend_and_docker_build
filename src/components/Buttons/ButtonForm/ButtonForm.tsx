import React from 'react';

import { ButtonFormProps } from './types';

export const ButtonForm: React.FC<ButtonFormProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} type='submit'>
      {children}
    </button>
  );
};
