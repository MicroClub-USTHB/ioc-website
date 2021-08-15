import { ErrorMessage, Field } from 'formik';
import React from 'react';
import { InputProps } from '../FormTypes';

const TextInput: React.FC<InputProps> = (props) => {
  const {name, ErrorComponent, error_className, field_className, label, label_className, placeholder} = props;
  return (
    <>
      <Field className={field_className} placeholder={placeholder} type="text" name={name} />
      <label className={label_className} htmlFor={name}>{label ?? null}</label>
      <ErrorMessage name={name} render={(err_msg) => ErrorComponent !== undefined && <ErrorComponent errorMessage={err_msg} className={error_className} />} />
    </>
  );
}

export default TextInput;
