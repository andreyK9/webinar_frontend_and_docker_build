import React from 'react';
import { useField } from 'formik';

import { FieldComponentType } from '../types';
import { Label } from 'components/Label';
import { InputFieald } from '../InputFieald';

export const ReferralField: FieldComponentType = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <Label label={label} htmlFor={props.id || props.name} required={props.required}>
      <InputFieald {...field} {...props} />
    </Label>
  );
};
