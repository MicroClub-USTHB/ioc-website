import React from 'react';
import * as yup from 'yup'; 
import axios from 'axios';
import { 
  Formik,
  Form,
  FormikHelpers,
} from 'formik';

// styles
import formStyle from './SigninForm.module.scss';

// types
import { SignInResponse, SignInValues } from '../../../../../../types/User';
import FormControl from '../../../../../../common/Formik/FormControl';
import { ErrorProps } from '../../../../../../common/Formik/FormTypes';


const Error: React.FC<ErrorProps> = (props) => {
  const { errorMessage, className } = props;
  return <div className={className}>{errorMessage}</div>
}

const SigninForm = () => {
  const initial_values: SignInValues = {
    email: '',
    password: '',
  }

  const validation_schema = new yup.ObjectSchema({
    email: yup.string().email("Must be a valid email.").required('This field is required.'),
    password: yup.string().min(8, 'Password must be at least 8 characters long.').required()
  })

  const handleSubmit = async (values: SignInValues, formikHelpers: FormikHelpers<SignInValues>) => {
    try {
      const res = await axios.post('/login', values, {
        responseType: 'json'
      });
      const user_data: SignInResponse = res.data;
    } catch (err) {
      console.log('this is error: ', err);
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

export default SigninForm;
