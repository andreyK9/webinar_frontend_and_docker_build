import React from 'react';
import { useField } from 'formik';

import { InputFieald } from '../InputFieald';
import { Label } from 'components/Label';
import { FieldComponentType } from '../types';

export const TextField: FieldComponentType = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <Label label={label} htmlFor={props.id || props.name} required={props.required}>
      <InputFieald {...field} {...props} />
    </Label>
  );
};
