import React from 'react';

import { ButtonFormProps } from './types';

export const ButtonForm: React.FC<ButtonFormProps> = ({ onClick }) => {
  return <div onClick={onClick}>ButtonForm</div>;
};
