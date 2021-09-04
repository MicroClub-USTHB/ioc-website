import React from "react";
import * as yup from "yup";
import { Formik, Form, FormikHelpers } from "formik";
import { useSignInMutation } from "../../../../../../redux/api/backend";
import FormControl from "../../../../../../common/Formik/FormControl";
import ErrorDisplay from "../../../../../../common/Formik/ErrorDisplay/ErrorDisplay";
import { useSelector, useDispatch } from "react-redux";

import Spinner from "../../../../../../common/Spinner/Spinner";
import { setUser } from "../../../../../../redux/slices/user";

// styles
import formStyle from "./SigninForm.module.scss";

// types
import { User, SignInValues } from "../../../../../../types/User";
import { LangType } from "../../../../../../common/Lang/french";
import { RootState, AppDispatch } from "../../../../../../redux/types";
const initial_values: SignInValues = {
    email: "",
    password: "",
};

const validation_schema = new yup.ObjectSchema({
    email: yup.string().email("Must be a valid email.").required("This field is required."),
    password: yup.string().min(8, "Password must be at least 8 characters long.").required(),
});
const SigninForm = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    const dispatch = useDispatch<AppDispatch>();

    const [signIn, { isLoading }] = useSignInMutation();

    return (
        <Formik
            initialValues={initial_values}
            validationSchema={validation_schema}
            onSubmit={async (values: SignInValues, formikHelpers: FormikHelpers<SignInValues>) => {
                try {
                    const res = await signIn(values);
                    if (res.hasOwnProperty("data")) {
                        dispatch(setUser((res as { data: User }).data));
                    } else if (res.hasOwnProperty("error")) {
                        throw new Error(JSON.stringify((res as { error: unknown }).error));
                    }
                } catch (err) {
                    console.error(err);
                    // needs error handling logic
                }
            }}
        >
            {(props) => {
                const { values, errors, touched } = props;
                return (
                    <Form>
                        <ul className={formStyle.input_list}>
                            <li>
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
                            <li>
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
                            <li>
                                <button disabled={isLoading} className={formStyle.submit_button}>
                                    {!isLoading ? Lang.auth.signin.button : <Spinner />}
                                </button>
                            </li>
                        </ul>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default SigninForm;
