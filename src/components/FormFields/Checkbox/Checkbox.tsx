import React from 'react';
import { Field, useField } from 'formik';

import { FieldComponentType } from '../types';

import './Checkbox.scss';

export const CheckboxFiled: FieldComponentType = ({ children, ...props }) => {
  const [field] = useField({ ...props, type: 'checkbox' });

  return (
    <label className='checkbox__lable'>
      <Field type='checkbox' className='checkbox__field' {...field} {...props} />
      {children}
    </label>
  );
};
