import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import * as yup from 'yup';
import axios from 'axios';
import FormControl from '../../../../../../common/Formik/FormControl';
import { ErrorProps } from '../../../../../../common/Formik/FormTypes';
import { SignUpValues } from '../../../../../../types/User';

// styles
import formStyle from './SignupForm.module.scss';

const Error: React.FC<ErrorProps> = (props) => {
  const { errorMessage, className } = props;
  return <div className={className}>{errorMessage}</div>
}

const SignupForm = () => {
  
  const initial_values: SignUpValues = {
    email: '',
    name: '',
    password: '',
    password_confirmation: ''
  }

  const validation_schema = new yup.ObjectSchema({
    email: yup.string().email('Must be a valid email.').required('This is a required field.'),
    name: yup.string().required('This is a required field.'),
    password: yup.string().min(8, "Password must be at least 8 characters long.").required('This is a required field.'),
    password_confirmation: yup.string().oneOf([yup.ref('password'), ''], 'Must be same as password.')
  })

  const handleSubmit = async (values: SignUpValues, formikHelpers: FormikHelpers<SignUpValues>) => {
    try {
      const res = await axios.post('/register', values);
      const {data} = res;
      console.log('this is response data: ', data);
    } catch (err) {
      console.log('Encountered an error: ', err);
    }
  }

  return (
    <Formik
      initialValues={initial_values}
      validationSchema={validation_schema}
      onSubmit={handleSubmit}
    >
      {
        (props) => {
          const { values, errors, touched } = props;
          return (
            <Form>
              <ul className={formStyle.input_list}>
                <li>
                  <FormControl
                    control="email"
                    name="email"
                    label="Email"
                    label_className={`${formStyle.label} ${(errors.email && touched.email) && formStyle.error_color} ${values.email && formStyle.label_values}`}
                    field_className={formStyle.field}
                    error_className={formStyle.error}
                    ErrorComponent={Error}
                  />
                </li>
                <li>
                  <FormControl
                    control="text"
                    name="name"
                    label="Name"
                    label_className={`${formStyle.label} ${(errors.name && touched.name) && formStyle.error_color} ${values.name && formStyle.label_values}`}
                    field_className={formStyle.field}
                    error_className={formStyle.error}
                    ErrorComponent={Error}
                  />
                </li>
                <li>
                  <FormControl
                    control="password"
                    name="password"
                    label="Password"
                    label_className={`${formStyle.label} ${(errors.password && touched.password) && formStyle.error_color} ${values.password && formStyle.label_values}`}
                    field_className={formStyle.field}
                    error_className={formStyle.error}
                    ErrorComponent={Error}
                  />
                </li>
                <li>
                  <FormControl
                    control="password"
                    name="password_confirmation"
                    label="Confirm Password"
                    label_className={`${formStyle.label} ${(errors.password_confirmation && touched.password_confirmation) && formStyle.error_color} ${values.password_confirmation && formStyle.label_values}`}
                    field_className={formStyle.field}
                    error_className={formStyle.error}
                    ErrorComponent={Error}
                  />
                </li>
                <li>
                  <button className={formStyle.submit_button}>Sign In</button>
                </li>
              </ul>
            </Form>
          )
        }
      } 
    </Formik>
  );
}

export default SignupForm;
