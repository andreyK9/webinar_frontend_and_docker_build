import React from 'react';
import { useField } from 'formik';

import { FieldComponentType } from '../types';

export const ReadOnlyField: FieldComponentType = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <span>{field.value}</span>
      {}
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </>
  );
};
