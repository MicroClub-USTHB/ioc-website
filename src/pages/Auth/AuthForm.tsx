import { useSignUpMutation } from "../../redux/api/backend";

// Formik
import { Form, Formik, FormikHelpers } from "formik";
import ErrorDisplay from "../../common/Formik/ErrorDisplay/ErrorDisplay";
import FormControl from "../../common/Formik/FormControl";
import * as yup from "yup";

// types
import { User, SignUpValues } from "../../types/User";

// styles
import formStyle from "./AuthForm.module.scss";

import { ValidationError } from "../../types/http";
import Spinner from "../../common/Spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/types";
import { LangType } from "../../common/Lang/french";
import { setUser } from "../../redux/slices/user";
import { fireEvent } from "@testing-library/react";
const initial_values: SignUpValues = {
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    password_confirm: "",
};

const validation_schema = (Lang: LangType) =>
    new yup.ObjectSchema({
        email: yup.string().email(Lang.auth.validation.email[0]).required(Lang.auth.validation.email[1]),
        userName: yup.string().required(Lang.auth.validation.userName),
        firstName: yup.string().required(Lang.auth.validation.firstName),
        lastName: yup.string().required(Lang.auth.validation.lastName),
        password: yup.string().required(Lang.auth.validation.password[0]).min(8, Lang.auth.validation.password[1]),
        password_confirm: yup
            .string()
            .required(Lang.auth.validation.password_confirm[0])
            .oneOf([yup.ref("password"), ""], Lang.auth.validation.password_confirm[1]),
    });
const AuthForm = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;

    const dispatch = useDispatch<AppDispatch>();
    const [signUp, { isLoading }] = useSignUpMutation();

    return (
        <Formik
            initialValues={initial_values}
            validationSchema={validation_schema(Lang)}
            onSubmit={async (values: SignUpValues, formikHelpers: FormikHelpers<SignUpValues>) => {
                try {
                    const res = await signUp(values);
                    if (res.hasOwnProperty("data")) {
                        dispatch(setUser((res as { data: User }).data));
                    } else if (res.hasOwnProperty("error")) {
                        throw new Error(JSON.stringify((res as { error: unknown }).error));
                    }
                } catch (err) {
                    // needs error handling logic
                    console.error(err);
                }
            }}
        >
            {(props) => {
                const { values, errors, touched } = props;
                return (
                    <Form className={formStyle.container}>
                        <ul className={formStyle.input_list}>
                            <li className={formStyle.email}>
                                <FormControl
                                    control="email"
                                    name="email"
                                    label={Lang.auth.email}
                                    label_className={`${formStyle.label} ${
                                        errors.email && touched.email && formStyle.error_color
                                    } ${values.email && formStyle.label_values}`}
                                    field_className={formStyle.field}
                                    error_className={formStyle.error}
                                    ErrorComponent={ErrorDisplay}
                                />
                            </li>
                            <li className={formStyle.userName}>
                                <FormControl
                                    control="text"
                                    name="userName"
                                    label={Lang.auth.userName}
                                    label_className={`${formStyle.label} ${
                                        errors.userName && touched.userName && formStyle.error_color
                                    } ${values.userName && formStyle.label_values}`}
                                    field_className={formStyle.field}
                                    error_className={formStyle.error}
                                    ErrorComponent={ErrorDisplay}
                                />
                            </li>
                            <li className={formStyle.userName}>
                                <FormControl
                                    control="text"
                                    name="firstName"
                                    label={Lang.auth.firstName}
                                    label_className={`${formStyle.label} ${
                                        errors.firstName && touched.firstName && formStyle.error_color
                                    } ${values.firstName && formStyle.label_values}`}
                                    field_className={formStyle.field}
                                    error_className={formStyle.error}
                                    ErrorComponent={ErrorDisplay}
                                />
                            </li>
                            <li className={formStyle.userName}>
                                <FormControl
                                    control="text"
                                    name="lastName"
                                    label={Lang.auth.lastName}
                                    label_className={`${formStyle.label} ${
                                        errors.lastName && touched.lastName && formStyle.error_color
                                    } ${values.lastName && formStyle.label_values}`}
                                    field_className={formStyle.field}
                                    error_className={formStyle.error}
                                    ErrorComponent={ErrorDisplay}
                                />
                            </li>
                            <li className={formStyle.password}>
                                <FormControl
                                    control="password"
                                    name="password"
                                    label={Lang.auth.password}
                                    label_className={`${formStyle.label} ${
                                        errors.password && touched.password && formStyle.error_color
                                    } ${values.password && formStyle.label_values}`}
                                    field_className={formStyle.field}
                                    error_className={formStyle.error}
                                    ErrorComponent={ErrorDisplay}
                                />
                            </li>
                            <li className={formStyle.password}>
                                <FormControl
                                    control="password"
                                    name="password_confirm"
                                    label={Lang.auth.password_confirm}
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
                                    {!isLoading ? Lang.auth.signup.button : <Spinner />}
                                </button>
                            </li>
                        </ul>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default AuthForm;