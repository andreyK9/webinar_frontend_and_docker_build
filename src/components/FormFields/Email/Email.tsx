import React from 'react';
import { useField } from 'formik';

import { InputFieald } from '../InputFieald';
import { FieldComponentType } from '../types';
import { Label } from 'components/Label';

export const EmailField: FieldComponentType = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <Label label={label} htmlFor={props.id || props.name} required={props.required}>
      <InputFieald {...field} {...props} />
    </Label>
  );
};
