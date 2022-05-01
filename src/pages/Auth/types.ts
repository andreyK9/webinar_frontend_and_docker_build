import { FormikHelpers } from 'formik';

export type AuthCancelFunctionType = () => void;
export type SignUpOpenFunctionType = () => void;

export type SubmitFunctionType = <T>(
  values: T,
  formikHelpers: FormikHelpers<T>,
) => void | Promise<any>;
