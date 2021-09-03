import React from "react";
import { useSignUpMutation } from "../../../../../../redux/api/backend";

// Formik
import { Form, Formik, FormikHelpers } from "formik";
import ErrorDisplay from "../../../../../../common/Formik/ErrorDisplay/ErrorDisplay";
import FormControl from "../../../../../../common/Formik/FormControl";
import * as yup from "yup";

// types
import { authResponse, SignUpValues,SignInValues } from "../../../../../../types/User";

// styles
import formStyle from "./SignupForm.module.scss";
import { useHistory } from "react-router-dom";
import { ValidationError } from "../../../../../../types/http";
import Spinner from "../../../../../../common/Spinner/Spinner";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/types";
import { LangType } from "../../../../../../common/Lang/french";
const initial_values: SignUpValues = {
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    password_confirm: "",
};

const validation_schema = new yup.ObjectSchema({
        email: yup.string().email("Must be a valid email.").required("This is a required field."),
        userName: yup.string().required("This is a required field."),
        firstName: yup.string().required("This is a required field."),
        lastName: yup.string().required("This is a required field."),
        password: yup
            .string()
            .min(8, "Password must be at least 8 characters long.")
            .required("This is a required field."),
        password_confirm: yup.string().oneOf([yup.ref("password"), ""], "Must be same as password."),
    });
const SignupForm = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    const history = useHistory();
    const [signUp, { isLoading }] = useSignUpMutation();
    //const prefetchReAuthenticate = usePrefetch("reAuthenticate");
    const handleSubmit = async (values: SignUpValues, formikHelpers: FormikHelpers<SignUpValues>) => {
        try {
            const res = await signUp(values);
            // for an idea of what's happening below check out the handleSubmit function in SigninForm component
            if (res.hasOwnProperty("data")) {
                const res_data = (res as { data: authResponse }).data;
                if (res_data.hasOwnProperty("token")) {       
                    history.push("/challenges");
                } else {
                    history.push("/signup");
                }
            } else if (res.hasOwnProperty("error")) {
                const { error: res_error } = res as { error: unknown };
                if (
                    typeof res_error === "object" &&
                    (res_error ?? {}).hasOwnProperty("data") &&
                    Array.isArray((res_error as { data: unknown }).data) &&
                    (res_error as { data: Array<ValidationError> }).data.length > 0
                ) {
                    const first_error = (res_error as { data: Array<ValidationError> }).data[0];
                    throw new Error(first_error.msg);
                } else {
                    throw new Error("An unexpected error occurred, please try again.");
                }
            }
        } catch (err) {
            // needs error handling logic
        }
    };

    
    return (
        <Formik initialValues={initial_values} validationSchema={validation_schema} onSubmit={handleSubmit}>
            {(props) => {
                const { values, errors, touched } = props;
                return (
                    <Form>
                        <ul className={formStyle.input_list}>
                            <li>
                                <FormControl
                                    control="email"
                                    name="email"
                                    label={Lang.signup_form_email}
                                    label_className={`${formStyle.label} ${
                                        errors.email && touched.email && formStyle.error_color
                                    } ${values.email && formStyle.label_values}`}
                                    field_className={formStyle.field}
                                    error_className={formStyle.error}
                                    ErrorComponent={ErrorDisplay}
                                />
                            </li>
                            <li>
                                <FormControl
                                    control="text"
                                    name="userName"
                                    label={Lang.signup_form_userName}
                                    label_className={`${formStyle.label} ${
                                        errors.userName && touched.userName && formStyle.error_color
                                    } ${values.userName && formStyle.label_values}`}
                                    field_className={formStyle.field}
                                    error_className={formStyle.error}
                                    ErrorComponent={ErrorDisplay}
                                />
                            </li>
                            <li>
                                <FormControl
                                    control="text"
                                    name="firstName"
                                    label={Lang.signup_form_firstName}
                                    label_className={`${formStyle.label} ${
                                        errors.userName && touched.userName && formStyle.error_color
                                    } ${values.userName && formStyle.label_values}`}
                                    field_className={formStyle.field}
                                    error_className={formStyle.error}
                                    ErrorComponent={ErrorDisplay}
                                />
                            </li>
                            <li>
                                <FormControl
                                    control="text"
                                    name="lastName"
                                    label={Lang.signup_form_lastName}
                                    label_className={`${formStyle.label} ${
                                        errors.userName && touched.userName && formStyle.error_color
                                    } ${values.userName && formStyle.label_values}`}
                                    field_className={formStyle.field}
                                    error_className={formStyle.error}
                                    ErrorComponent={ErrorDisplay}
                                />
                            </li>
                            <li>
                                <FormControl
                                    control="password"
                                    name="password"
                                    label={Lang.signup_form_password}
                                    label_className={`${formStyle.label} ${
                                        errors.password && touched.password && formStyle.error_color
                                    } ${values.password && formStyle.label_values}`}
                                    field_className={formStyle.field}
                                    error_className={formStyle.error}
                                    ErrorComponent={ErrorDisplay}
                                />
                            </li>
                            <li>
                                <FormControl
                                    control="password"
                                    name="password_confirm"
                                    label={Lang.signup_form_password_confirm}
                                    label_className={`${formStyle.label} ${
                                        errors.password_confirm && touched.password_confirm && formStyle.error_color
                                    } ${values.password_confirm && formStyle.label_values}`}
                                    field_className={formStyle.field}
                                    error_className={formStyle.error}
                                    ErrorComponent={ErrorDisplay}
                                />
                            </li>
                            <li>
                                <button disabled={isLoading} className={formStyle.submit_button}>
                                    {!isLoading ? Lang.signup_form_button : <Spinner />}
                                </button>
                            </li>
                        </ul>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default SignupForm;
