import React from 'react';
import { Field, useField } from 'formik';
import { FieldComponentType } from '../types';

export const CheckboxFiled: FieldComponentType = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <div>
      <label className='checkbox-input'>
        <Field type='checkbox' {...field} {...props} />
        {children}
      </label>

      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </div>
  );
};
