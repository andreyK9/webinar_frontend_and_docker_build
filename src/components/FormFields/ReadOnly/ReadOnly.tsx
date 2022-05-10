import React from 'react';
import { useField } from 'formik';

import { Label } from 'components/Label';
import { FieldComponentType } from '../types';

import './ReadOnly.scss';

export const ReadOnlyField: FieldComponentType = ({ label, ...props }) => {
  const [{ value }] = useField(props);

  return (
    <Label label={label} htmlFor={props.id || props.name} required={props.required}>
      <span className='read-only-field'>{value}</span>
    </Label>
  );
};
