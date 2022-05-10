import React from 'react';
import { useField } from 'formik';
import { Trans } from 'react-i18next';

import { InputFieald } from '../InputFieald';
import { Label } from 'components/Label';
import { FieldComponentType } from '../types';

import './Password.scss';

export const PasswordField: FieldComponentType = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <Label label={label} htmlFor={props.id || props.name} required={props.required}>
      <span className='password-field'>
        <Trans>forgot password</Trans>
      </span>

      <InputFieald type='password' {...field} {...props} />
    </Label>
  );
};
