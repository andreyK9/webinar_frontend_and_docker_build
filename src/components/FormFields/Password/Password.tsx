import React from 'react';
import { useField } from 'formik';

import { InputFieald } from '../InputFieald';
import { Label } from 'components/Label';
import { FieldComponentType } from '../types';

export const PasswordField: FieldComponentType = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <Label label={label} htmlFor={props.id || props.name} required={props.required}>
      <InputFieald type='password' {...field} {...props} />
    </Label>
  );
};
