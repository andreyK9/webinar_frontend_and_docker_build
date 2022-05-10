import React from 'react';

import { ButtonFormProps } from './types';
import { addModificator } from 'helpers';

import './ButtonForm.scss';

const addDisabledBy = addModificator('button-form', 'disabled');

export const ButtonForm: React.FC<ButtonFormProps> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <button onClick={onClick} className={addDisabledBy(props.disabled)} {...props}>
      {children}
    </button>
  );
};
