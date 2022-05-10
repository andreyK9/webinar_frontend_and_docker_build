import { LabelHTMLAttributes } from 'react';

export interface LabelType extends LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  required?: boolean;
}
