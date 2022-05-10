import React from 'react';

import { LabelType } from './types';
import { addModificator } from 'helpers';

import './Label.scss';

const addRequeredBy = addModificator('label', 'required');

export const Label: React.FC<LabelType> = ({ children, label, required, ...props }) => {
  return (
    <div>
      <label className={addRequeredBy(required)} {...props}>
        {label}
      </label>

      {children}
    </div>
  );
};
