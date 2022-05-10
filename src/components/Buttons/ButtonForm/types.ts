import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

export interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLElement>;
  primary?: boolean;
}
