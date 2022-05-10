import React from 'react';
import { Field, FieldAttributes } from 'formik';

import './InputFieald.scss';

export const InputFieald = (props: FieldAttributes<any>) => {
  return <Field className='input-field' {...props} />;
};
