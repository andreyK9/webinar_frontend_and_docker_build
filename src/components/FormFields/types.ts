import { FieldHookConfig } from 'formik';
import { PropsWithChildren, ReactElement } from 'react';

export type FieldProps<T = any> = FieldHookConfig<T> & { label?: string };

export type FieldComponentType = <T>({
  label,
  ...props
}: PropsWithChildren<FieldProps<T>>) => ReactElement<any, any> | null;
