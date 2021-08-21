import React from 'react';
import { api, useSignUpMutation } from '../../../../../../redux/api/backend';
import { useDispatch } from 'react-redux';

// Formik
import { Form, Formik, FormikHelpers } from 'formik';
import ErrorDisplay from '../../../../../../common/Formik/ErrorDisplay/ErrorDisplay';
import FormControl from '../../../../../../common/Formik/FormControl';
import * as yup from 'yup';

// types
import { SignUpResponse, SignUpValues } from '../../../../../../types/User';

// styles
import formStyle from './SignupForm.module.scss';
import { useHistory } from 'react-router-dom';
import { ValidationError } from '../../../../../../types/http';

const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ signUp ] = useSignUpMutation();
  const initial_values: SignUpValues = {
    email: '',
    name: '',
    password: '',
    password_confirm: ''
  }

  const validation_schema = new yup.ObjectSchema({
    email: yup.string().email('Must be a valid email.').required('This is a required field.'),
    name: yup.string().required('This is a required field.'),
    password: yup.string().min(8, "Password must be at least 8 characters long.").required('This is a required field.'),
    password_confirm: yup.string().oneOf([yup.ref('password'), ''], 'Must be same as password.')
  })

  const handleSubmit = async (values: SignUpValues, formikHelpers: FormikHelpers<SignUpValues>) => {
    try {
      const res = await signUp(values);
      // for an idea of what's happening below check out the handleSubmit function in SigninForm component
      if (res.hasOwnProperty('data')) {
        const res_data = (res as { data: SignUpResponse } ).data;
        if (res_data.hasOwnProperty('user')) {
          dispatch( api.util.updateQueryData('getUserData', null, state => { state = res_data.user!; }) );
          history.push('/challenges');
        } else {
          history.push('/signin');
        }
      } else if (res.hasOwnProperty('error')) {
        const {error: res_error} = res as { error: unknown };
        if ( typeof res_error === 'object' && (res_error ?? {}).hasOwnProperty('data') && Array.isArray((res_error as { data: unknown }).data) && (res_error as { data: Array<ValidationError> }).data.length > 0 ) {
          const first_error = (res_error as { data: Array<ValidationError> }).data[0];
          throw new Error(first_error.msg);
        } else {
          throw new Error('An unexpected error occured, please try again.');
        }
      }

    } catch (err) {
      // needs error handling logic
      
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
                    ErrorComponent={ErrorDisplay}
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
                    ErrorComponent={ErrorDisplay}
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
                    ErrorComponent={ErrorDisplay}
                  />
                </li>
                <li>
                  <FormControl
                    control="password"
                    name="password_confirm"
                    label="Confirm Password"
                    label_className={`${formStyle.label} ${(errors.password_confirm && touched.password_confirm) && formStyle.error_color} ${values.password_confirm && formStyle.label_values}`}
                    field_className={formStyle.field}
                    error_className={formStyle.error}
                    ErrorComponent={ErrorDisplay}
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
