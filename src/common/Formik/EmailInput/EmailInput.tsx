import React from 'react';
import {Field, ErrorMessage} from 'formik';
import { InputProps } from '../FormTypes';

const EmailInput: React.FC<InputProps> = (props) => {
  const {name, label, placeholder, ErrorComponent, label_className, field_className, error_className} = props;
  return (
    <>
      <Field className={field_className} placeholder={placeholder} type="email" name={name} />
      <label className={label_className} htmlFor={name}>{label ?? null}</label>
      <ErrorMessage name={name} render={(err_msg) => ErrorComponent !== undefined && <ErrorComponent errorMessage={err_msg} className={error_className} />} />
    </>
  );
}

export default EmailInput;
