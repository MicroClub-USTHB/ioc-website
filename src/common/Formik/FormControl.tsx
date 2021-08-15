import React from 'react';
import EmailInput from './EmailInput/EmailInput';
import { FormControlProps } from './FormTypes';
import PasswordInput from './PasswordInput/PasswordInput';
import TextInput from './TextInput/TextInput';

const FormControl: React.FC<FormControlProps> = (props) => {
  const {control, ...form_props} = props;
  switch (control) {
    case 'email': return <EmailInput {...form_props} />;
    case 'password': return <PasswordInput {...form_props} />;
    case 'text': return <TextInput {...form_props} />;
  }
}

export default FormControl;
