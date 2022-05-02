import React from 'react';

import { FieldComponentType } from '../types';

export const ReadOnlyField: FieldComponentType = ({ label, ...props }) => {
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <span>{'field.value'}</span>
    </>
  );
};
