import React from 'react';
import { Field, useField } from 'formik';

import { FieldComponentType } from '../types';

export const PasswordField: FieldComponentType = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>

      <Field className='text-input' type='password' {...field} {...props} />

      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </>
  );
};
