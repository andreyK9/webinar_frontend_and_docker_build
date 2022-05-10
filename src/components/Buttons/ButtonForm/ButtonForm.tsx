import React from 'react';

import { ButtonFormProps } from './types';
import { addJustModificator, addModificator } from 'helpers';

import './ButtonForm.scss';

const addDisabledBy = addModificator('button-form', 'disabled');
const addPrimarydBy = addJustModificator('button-form', 'primary');

export const ButtonForm: React.FC<ButtonFormProps> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={addDisabledBy(props.disabled) + addPrimarydBy(props.primary)}
      {...props}
    >
      {children}
    </button>
  );
};
