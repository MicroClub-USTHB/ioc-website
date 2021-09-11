import React, { useEffect, useState, useRef } from "react";
import * as yup from "yup";
import { Formik, Form, FormikHelpers, FormikErrors } from "formik";
import { useSelector, useDispatch } from "react-redux";
import FormControl from "../../common/Formik/FormControl";
import ErrorDisplay from "../../common/Formik/ErrorDisplay/ErrorDisplay";
import Spinner from "../../common/Spinner/Spinner";
import { Link } from "react-router-dom";
import { SignInValues, User } from "../../types/User";
import { useSignInMutation } from "../../redux/api/backend";
import { LangType } from "../../common/Lang/french";
import { AppDispatch, RootState } from "../../redux/types";
import { Notify } from "../../redux/slices/notifications";
// icons
import {
    UilBars,
    UilInfoCircle,
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
    set: any;
    user?: boolean;
    logout?: boolean;
}
const NavButton: React.FC<navButtonI> = ({ to, Comp, text, span, user = false, logout = false, set }) => {
    return (
        <li>
            <Link
                onClick={(e) => set(false)}
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
    const [popper, setPopper] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const [signIn, { isLoading }] = useSignInMutation();
    const ref = useRef(null);
    useEffect(() => {
        window.document.addEventListener("click", (event) => {
            if (ref?.current && !(ref?.current as Element | null)?.contains(event.target as Node | null)) {
                setPopper(false);
            }
        });
    }, []);
    return (
        <span ref={ref}>
            <button className={popoverStyle.popover_button} onClick={(e) => setPopper(!popper)}>
                <UilBars />
            </button>
            <div className={`${popoverStyle.popover_container} ${popper ? popoverStyle.display : ""}`}>
                <ul className={popoverStyle.nav_list}>
                    {/* Sign in */}
                    {user ? (
                        <NavButton
                            set={setPopper}
                            to="/challenges"
                            text={user.userName}
                            span={Lang.menu.user}
                            Comp={<UilUser />}
                            user={true}
                        />
                    ) : (
                        <>
                            <Formik
                                initialValues={initial_values}
                                validationSchema={validation_schema}
                                onSubmit={async (values: SignInValues, formikBag: FormikHelpers<SignInValues>) => {
                                    try {
                                        const res = await signIn(values);
                                        if (res.hasOwnProperty("data")) {
                                            Notify(dispatch, {
                                                title: Lang.notifications.loggedIn.title,
                                                description: Lang.notifications.loggedIn.description,
                                                type: "success",
                                            });
                                            dispatch(setUser((res as { data: User }).data));
                                        } else if (res.hasOwnProperty("error")) {
                                            /* formikBag.setErrors({
                                                password: (res as { error: { data: { msg: string } } }).error.data.msg,
                                            }); */
                                            const status = (res as { error: any }).error.status;
                                            console.log((res as { error: any }).error);
                                            if (status) {
                                                switch (status) {
                                                    case 420:
                                                        Notify(dispatch, {
                                                            title: Lang.errors.loggedIn.title,
                                                            description: Lang.errors.loggedIn.email,
                                                            type: "error",
                                                        });
                                                        break;
                                                    case 423:
                                                        Notify(dispatch, {
                                                            title: Lang.errors.loggedIn.title,
                                                            description: Lang.errors.loggedIn.password,
                                                            type: "error",
                                                        });
                                                        break;
                                                    default:
                                                        throw (res as { error: any }).error;
                                                }
                                            } else throw (res as { error: any }).error;
                                        }
                                    } catch (err) {
                                        Notify(dispatch, {
                                            title: Lang.errors.loggedIn.title,
                                            description: Lang.errors.loggedIn.description,
                                            type: "error",
                                        });
                                    }
                                }}
                            >
                                {({ values, errors, touched }) => (
                                    <Form className={popoverStyle.signin_form}>
                                        <ul className={`input_list ${popoverStyle.input_list}`}>
                                            <li className="email">
                                                <FormControl
                                                    control="email"
                                                    name="email"
                                                    label={Lang.auth.email}
                                                    label_className={`label ${popoverStyle.label} ${
                                                        errors.email && touched.email && "error_color"
                                                    } ${values.email && `label_values`}`}
                                                    field_className={"field"}
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
                                                        errors.password && touched.password && "error_color"
                                                    } ${
                                                        values.password && `label_values ${popoverStyle.label_values}`
                                                    }`}
                                                    field_className={"field"}
                                                    error_className={`error ${popoverStyle.error}`}
                                                    ErrorComponent={ErrorDisplay}
                                                />
                                            </li>
                                            <button
                                                type="submit"
                                                className={`submit_button ${popoverStyle.submit_button}`}
                                                disabled={isLoading}
                                            >
                                                {!isLoading ? Lang.auth.signin.button : <Spinner />}
                                            </button>
                                        </ul>
                                    </Form>
                                )}
                            </Formik>
                            {window.location.pathname !== "/" && !user ? (
                                <NavButton
                                    set={setPopper}
                                    to="/"
                                    text={Lang.menu.home[0]}
                                    span={Lang.menu.home[1]}
                                    Comp={<UilHome />}
                                />
                            ) : (
                                <NavButton
                                    set={setPopper}
                                    to="/Signup"
                                    text={Lang.menu.signup[0]}
                                    span={Lang.menu.signup[1]}
                                    Comp={<UilSignInAlt />}
                                />
                            )}
                        </>
                    )}
                    {/* The event */}
                    <NavButton
                        set={setPopper}
                        to="/#About"
                        text={Lang.menu.about[0]}
                        span={Lang.menu.about[1]}
                        Comp={<UilInfoCircle />}
                    />
                    {/* FAQ */}
                    <NavButton
                        set={setPopper}
                        to="/#FAQ"
                        text={Lang.menu.FAQ[0]}
                        span={Lang.menu.FAQ[1]}
                        Comp={<UilCommentQuestion />}
                    />
                    {user ? (
                        <NavButton
                            set={setPopper}
                            to="/logout"
                            logout
                            text={Lang.menu.logout[0]}
                            span={Lang.menu.logout[1]}
                            Comp={<UilSignOutAlt />}
                        />
                    ) : (
                        ""
                    )}
                </ul>
            </div>
        </span>
    );
};

export default Menu;
