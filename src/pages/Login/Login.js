import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Styles
import SStyle from './Login.module.scss';

// Images
import bgImage from '../../media/registerBackgroung-min.jpg';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUserAlt,
    faLock,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { emailSignIn } from '../../redux/workspaceSlice';

const Login = () => {
    const dispatch = useDispatch();
    const AuthError = useSelector(state => state.workspace.authError);
    const loadingUser = useSelector(state => state.workspace.loadingUser);
    const isMobile = useSelector(state => state.workspace.isMobile);

    const LoadingIndicator = (
        <div className={SStyle.mainIconContainer}>
            <FontAwesomeIcon className={SStyle.spinner} icon={faSpinner} />
        </div>
    )

    const HomeLink = (
        <Link to="/" className={SStyle.mainIconContainer}>
            <FontAwesomeIcon icon={faUserAlt} className={SStyle.mainIcon} />
        </Link>
    )

    const blurStyles = {
        label: {
            top: isMobile? '-1.2rem' : '-1vw',
            opacity: '1',
        },
        icon: {
            top: isMobile? '-1.2rem' : '-1vw'
        }
    }
    const [BlurData, setBlurData] = useState({
        email: false,
        password: false,
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
            default:
                break;
        }
    };

    return (
        <section className={SStyle.mainContainer}>
            <div className={SStyle.bgImageContainer}>
                <img src={bgImage} alt="" className={SStyle.bgImage} />
                <div className={SStyle.cardContainer}>
                    {
                        loadingUser? LoadingIndicator : HomeLink
                    }
                    
                    <span className={SStyle.title}>
                        Login
                    </span>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={
                            Yup.object({
                                email: Yup
                                        .string()
                                        .trim()
                                        .email('Must be a valid email')
                                        .required('This field is required.'),
                                password: Yup
                                            .string()
                                            .trim()
                                            .min(8, 'Password must be greater than eight (8) characters long.')
                                            .max(62, 'Password is too long (max is 62 chars)')
                                            .required('This field is required.'),
                            })
                        }
                        validateOnBlur
                        onSubmit={( values, setSubmitting) => {
                            dispatch(emailSignIn(values));
                            setSubmitting(false);
                        }}
                    >
                        {
                            ({errors, touched}) => (
                                <Form className={SStyle.form}>
                                    {
                                        AuthError &&
                                        (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <h1
                                                    style={{
                                                        margin: '0'
                                                    }}
                                                >Auth Error, try again.</h1>
                                            </div>
                                        )
                                    }
                                    <div className={SStyle.inputDiv}>
                                        <Field
                                            name="email"
                                            type="email"
                                            onInput={handleInputBlur}
                                        />
                                        <span
                                            style={ BlurData.email? blurStyles.icon : null}
                                        >
                                            <FontAwesomeIcon icon={faUserAlt} />
                                        </span>
                                        <label
                                            htmlFor="email"
                                            style={ BlurData.email? blurStyles.label : null}
                                        >Email</label>
                                        <div className={SStyle.decoration}></div>
                                        {
                                            (errors.email && touched.email) ?
                                            (<div className={SStyle.errorIndicator}>!</div>) : touched.email ?
                                            (<div className={SStyle.errorIndicator} style={{backgroundColor: 'rgb(114, 255, 114)'}}>✓</div>) : null
                                        }
                                        {
                                            (errors.email && touched.email) && 
                                            (<div className={SStyle.errorContainer}>
                                                <ErrorMessage name="email" />
                                            </div>)
                                        }
                                    </div>
                                    <div className={SStyle.inputDiv}>
                                        <Field
                                            type="password"
                                            name="password"
                                            onInput={handleInputBlur}
                                        />
                                        <span
                                            style={ BlurData.password? blurStyles.icon : null}
                                        >
                                            <FontAwesomeIcon icon={faLock} />
                                        </span>
                                        <label
                                            htmlFor="password"
                                            style={ BlurData.password? blurStyles.label : null}
                                        >Password</label>
                                        <div className={SStyle.decoration}></div>
                                        {
                                            (errors.password && touched.password) ?
                                            (<div className={SStyle.errorIndicator}>!</div>) : touched.password ?
                                            (<div className={SStyle.errorIndicator} style={{backgroundColor: 'rgb(114, 255, 114)'}}>✓</div>) : null
                                        }
                                        {
                                            (errors.password && touched.password) && 
                                            (<div className={SStyle.errorContainer}>
                                                <ErrorMessage name="password" />
                                            </div>)
                                        }
                                    </div>
                                    <div className={SStyle.checkboxDiv}>
                                        <Field name="save" type="checkbox" />
                                        <span className={SStyle.checkbox}></span>
                                        <label htmlFor="save">Remember me</label>
                                    </div>
                                    <div className={SStyle.buttonContainer}>
                                        <button type="submit">Login</button>    
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                        <div className={SStyle.signupCTA}>
                            <Link to="/register">Create an account &#8594;</Link>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Login;