import React from 'react';
import { Field, FieldInputProps } from 'formik';

import './InputFieald.scss';

export const InputFieald = <T,>(props: FieldInputProps<T>) => {
  return <Field className='input-field' {...props} />;
};
