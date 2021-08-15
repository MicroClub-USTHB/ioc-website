import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { InputProps } from '../FormTypes';

const PasswordInput: React.FC<InputProps> = (props) => {
  const { name, label, placeholder, label_className, field_className, error_className, ErrorComponent } = props;
  return (
    <>
      <Field name={name} placeholder={placeholder} className={field_className} type="password" />
      <label className={label_className} htmlFor={name}>{label ?? null}</label>
      <ErrorMessage name={name} render={(err_msg) => ErrorComponent !== undefined && <ErrorComponent errorMessage={err_msg} className={error_className} />} />
    </>
  );
}

export default PasswordInput;
