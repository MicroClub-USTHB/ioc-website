import { Popover } from "@headlessui/react";
import React, { useState } from "react";
import * as yup from "yup";
import { usePopper } from "react-popper";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import FormControl from "../../common/Formik/FormControl";
import ErrorDisplay from "../../common/Formik/ErrorDisplay/ErrorDisplay";
import Spinner from "../../common/Spinner/Spinner";
import { Link, useHistory } from "react-router-dom";
import { SignInValues, User } from "../../types/User";
import { useSignInMutation } from "../../redux/api/backend";
import { LangType } from "../../common/Lang/french";
import { AppDispatch, RootState } from "../../redux/types";
// icons
import {
    UilBars,
    UilInfoCircle,
    UilVideo,
    UilHome,
    UilCommentQuestion,
    UilUser,
    UilSignOutAlt,
    UilSignInAlt,
} from "@iconscout/react-unicons";

// styles
import popoverStyle from "./Menu.module.scss";
import { setUser } from "../../redux/slices/user";
const initial_values: SignInValues = {
    email: "",
    password: "",
};

const validation_schema = new yup.ObjectSchema({
    email: yup.string().email("Must be a valid email.").required("This field is required."),
    password: yup.string().min(8, "Password must be at least 8 characters long.").required(),
});
interface navButtonI {
    to: string;
    Comp: React.ReactNode;
    text: string;
    span: string;
    user?: boolean;
    logout?: boolean;
}
const NavButton: React.FC<navButtonI> = ({ to, Comp, text, span, user = false, logout = false }) => {
    return (
        <li>
            <Link
                to={to}
                className={`${user ? popoverStyle.nav_main : ""} ${logout ? popoverStyle.nav_logout : ""} ${
                    popoverStyle.nav_button
                }`}
            >
                <div className={popoverStyle.nav_icon_container}>{Comp}</div>
                <div className={popoverStyle.nav_button_text}>
                    <span>{text} </span>
                    <span> {span}</span>
                </div>
            </Link>
        </li>
    );
};
const Menu = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    const user = useSelector<RootState>((state) => state.user) as User;
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const dispatch = useDispatch<AppDispatch>();
    const [signIn, { isLoading }] = useSignInMutation();
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom-start",
        modifiers: [{ name: "offset", options: { offset: [0, 20] } }],
    });
    const history = useHistory();
    return (
        <Popover style={{ zIndex: 10 }}>
            <Popover.Button ref={setReferenceElement as any} className={popoverStyle.popover_button}>
                <UilBars />
            </Popover.Button>
            <Popover.Panel
                ref={setPopperElement as any}
                className={popoverStyle.popover_container}
                style={styles.popper}
                {...attributes.popper}
            >
                <ul className={popoverStyle.nav_list}>
                    {/* Sign in */}
                    {user ? (
                        <NavButton
                            to="/challenges"
                            text={user.userName}
                            span={"Start the Challenges"}
                            Comp={<UilUser />}
                            user={true}
                        />
                    ) : (
                        <>
                            <Formik
                                initialValues={initial_values}
                                validationSchema={validation_schema}
                                onSubmit={async (values: SignInValues) => {
                                    try {
                                        const res = await signIn(values);
                                        console.log('this is: ', res);
                                        if (res.hasOwnProperty("data")) {
                                            dispatch(setUser((res as { data: User }).data));
                                            history.push('/challenges');
                                        } else if (res.hasOwnProperty("error")) {
                                            throw new Error(JSON.stringify((res as { error: unknown }).error));
                                        }
                                    } catch (err) {
                                        console.error(err);
                                    }
                                }}
                            >
                                {
                                    ({values, errors, touched}) => (
                                        <Form className={popoverStyle.signin_form}>
                                            <ul className={`input_list ${popoverStyle.input_list}`}>
                                                <li className="email">
                                                    <FormControl
                                                        control="email"
                                                        name="email"
                                                        label={Lang.auth.email}
                                                        label_className={`label ${popoverStyle.label} ${
                                                            errors.email && touched.email && 'error_color'
                                                        } ${values.email && `label_values`}`}
                                                        field_className={'field'}
                                                        error_className={`error ${popoverStyle.error}`}
                                                        ErrorComponent={ErrorDisplay}
                                                    />
                                                </li>
                                                <li className="password">
                                                    <FormControl
                                                        control="password"
                                                        name="password"
                                                        label={Lang.auth.password}
                                                        label_className={`label ${popoverStyle.label} ${
                                                            errors.password && touched.password && 'error_color'
                                                        } ${values.password && `label_values ${popoverStyle.label_values}`}`}
                                                        field_className={'field'}
                                                        error_className={`error ${popoverStyle.error}`}
                                                        ErrorComponent={ErrorDisplay}
                                                    />
                                                </li>
                                                <button className={`submit_button ${popoverStyle.submit_button}`} disabled={isLoading}>
                                                    {!isLoading ? Lang.auth.signin.button : <Spinner />}
                                                </button>
                                            </ul>
                                        </Form>
                                        )
                                    }
                            </Formik>
                            {window.location.pathname !== "/" && !user ? (
                                <NavButton
                                    to="/"
                                    text={"Home"}
                                    span={"Go Back the the landing page"}
                                    Comp={<UilHome />}
                                />
                            ) : (
                                <NavButton
                                    to="/Signup"
                                    text={"Signup"}
                                    span={"Register in this challenge"}
                                    Comp={<UilSignInAlt />}
                                />
                            )}
                        </>
                    )}
                    {/* The event */}
                    <NavButton
                        to="/#About"
                        text={"The event"}
                        span={"Learn more about the event"}
                        Comp={<UilInfoCircle />}
                    />
                    {/* Video Tutorial 
                    <NavButton
                        to="/#Video"
                        text={"Participation tutorial"}
                        span={"Watch a video tutorial"}
                        Comp={<UilVideo />}
                    />*/}
                    {/* FAQ */}
                    <NavButton to="/#FAQ" text={"FAQ"} span={"Questions and answers"} Comp={<UilCommentQuestion />} />
                    {user ? <NavButton to="/logout" logout text={"Logout"} span={""} Comp={<UilSignOutAlt />} /> : ""}
                </ul>
            </Popover.Panel>
        </Popover>
    );
};

export default Menu;
