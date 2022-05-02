import React from 'react';

import { ButtonFormProps } from './types';

export const ButtonForm: React.FC<ButtonFormProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} type='submit'>
      ButtonForm
    </button>
  );
};
