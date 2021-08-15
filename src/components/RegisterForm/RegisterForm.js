import React, { useState } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Styles
import regStyle from './RegisterForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAt,
    faKey,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignUp } from '../../redux/workspaceSlice';

const Register2 = () => {
    const dispatch = useDispatch();
    const isMobile = useSelector(state => state.workspace.isMobile);

    const blurStyles = {
        label: {
            top: isMobile? '-1rem' : '-1vw',
            opacity: '1',
        },
        icon: {
            top: isMobile? '-1rem' : '-1vw'
        }
    }
    const [BlurData, setBlurData] = useState({
        email: false,
        fullName: false,
        password: false,
        passwordConfirm: false
    });

    function handleInputBlur(e) {
        switch (e.target.name) {
            case 'email':
                if (e.target.value) {
                    setBlurData({
                        ...BlurData,
                        email: true,
                    })
                } else {
                    setBlurData({
                        ...BlurData,
                        email: false,
                    })
                }
                break;
            case 'fullName':
                if(e.target.value) {
                    setBlurData({
                        ...BlurData,
                        fullName: true,
                    })
                } else {
                    setBlurData({
                        ...BlurData,
                        fullName: false,
                    })
                }
                break;
            case 'password':
                if (e.target.value) {
                    setBlurData({
                        ...BlurData,
                        password: true,
                    })
                } else {
                    setBlurData({
                        ...BlurData,
                        password: false,
                    })
                }
                break;
            case 'passwordConfirm':
                if(e.target.value) {
                    setBlurData({
                        ...BlurData,
                        passwordConfirm: true,
                    })
                } else {
                    setBlurData({
                        ...BlurData,
                        passwordConfirm: false,
                    })
                }
                break;
            default:
                break;
        }
    };
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    fullName: '',
                    password: '',
                    passwordConfirm: ''
                }}
                validationSchema= {Yup.object({
                    email: Yup.string()
                                .trim()
                                .email('Invalid email')
                                .min(5, 'Invalid email')
                                .max(255, 'Email is too long')
                                .required('This field is required'),
                    fullName: Yup.string()
                                .trim()
                                .min(6, 'Name is too short')
                                .max(255, 'Name is too long')
                                .required('This field is required'),
                    password: Yup.string()
                                .trim()
                                .required('This field is required')
                                .min(8, 'Password must be at least 8 characters long')
                                .max(62, 'Password is too long (max is 62 chars)'),
                    passwordConfirm: Yup.string()
                                .trim()
                                .required('This field is required')
                                .oneOf([Yup.ref('password')], 'Passwords do not match')
                })}
                validateOnChange
                onSubmit={values => {
                    console.log(values);
                    dispatch(emailSignUp(values))
                }}
            >
                {({ errors, touched }) => (
                    <Form className={regStyle.form}>
                    <div className={regStyle.inputDiv}>
                        <Field
                            name="email"
                            type="email"
                            onInput={handleInputBlur}
                        />
                        <span
                            style={ BlurData.email? blurStyles.icon : null}
                        >
                            <FontAwesomeIcon icon={faAt} />
                        </span>
                        <label
                            htmlFor="email"
                            style={ BlurData.email? blurStyles.label : null}
                        >Email</label>
                        <div className={regStyle.decoration}></div>
                        {
                            (errors.email && touched.email) ?
                            (<div className={regStyle.errorIndicator}>!</div>) : touched.email ?
                            (<div className={regStyle.errorIndicator} style={{backgroundColor: 'rgb(114, 255, 114)'}}>✓</div>) : null
                        }
                        {
                            (errors.email && touched.email) && 
                            (<div className={regStyle.errorContainer}>
                                <ErrorMessage name="email" />
                            </div>)
                        }
                    </div>
                    <div className={regStyle.inputDiv}>
                        <Field
                            name="fullName"
                            onInput={handleInputBlur}
                        />
                        <span
                            style={ BlurData.fullName? blurStyles.icon : null}
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <label
                            htmlFor="fullName"
                            style={ BlurData.fullName? blurStyles.label : null}
                        >Full Name</label>
                        <div className={regStyle.decoration}></div>
                        {
                            (errors.fullName && touched.fullName) ?
                            (<div className={regStyle.errorIndicator}>!</div>) : touched.fullName ?
                            (<div className={regStyle.errorIndicator} style={{backgroundColor: 'rgb(114, 255, 114)'}}>✓</div>) : null
                        }
                        {
                            (errors.fullName && touched.fullName) && 
                            (<div className={regStyle.errorContainer}>
                                <ErrorMessage name="fullName" />
                            </div>)
                        }
                    </div>
                    <div className={regStyle.inputDiv}>
                        <Field
                            name="password"
                            type="password"
                            onInput={handleInputBlur}
                        />
                        <span
                            style={ BlurData.password? blurStyles.icon : null}
                        >
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <label
                            htmlFor="email"
                            style={ BlurData.password? blurStyles.label : null}
                        >Password</label>
                        <div className={regStyle.decoration}></div>
                        {
                            (errors.password && touched.password) ?
                            (<div className={regStyle.errorIndicator}>!</div>) : touched.password ?
                            (<div className={regStyle.errorIndicator} style={{backgroundColor: 'rgb(114, 255, 114)'}}>✓</div>) : null
                        }
                        {
                            (errors.password && touched.password) && 
                            (<div className={regStyle.errorContainer}>
                                <ErrorMessage name="password" />
                            </div>)
                        }
                    </div>
                    <div className={regStyle.inputDiv}>
                        <Field
                            name="passwordConfirm"
                            type="password"
                            onInput={handleInputBlur}
                        />
                        <span
                            style={ BlurData.passwordConfirm? blurStyles.icon : null}
                        >
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <label
                            htmlFor="email"
                            style={ BlurData.passwordConfirm? blurStyles.label : null}
                        >Confirm password</label>
                        <div className={regStyle.decoration}></div>
                        {
                            (errors.passwordConfirm && touched.passwordConfirm) ?
                            (<div className={regStyle.errorIndicator}>!</div>) : touched.passwordConfirm ?
                            (<div className={regStyle.errorIndicator} style={{backgroundColor: 'rgb(114, 255, 114)'}}>✓</div>) : null
                        }
                        {
                            (errors.passwordConfirm && touched.passwordConfirm) && 
                            (<div className={regStyle.errorContainer}>
                                <ErrorMessage name="passwordConfirm" />
                            </div>)
                        }
                    </div>                    
                    <div className={regStyle.buttonContainer}>
                        <button type="submit">Register</button>    
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    );
}

export default Register2;
