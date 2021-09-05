import { Popover } from "@headlessui/react";
import React, { useState } from "react";
import * as yup from "yup";
import { usePopper } from "react-popper";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import FormControl from "../../common/Formik/FormControl";
import ErrorDisplay from "../../common/Formik/ErrorDisplay/ErrorDisplay";
import Spinner from "../../common/Spinner/Spinner";
import { Link } from "react-router-dom";
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
                            span={Lang.menu.user}
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
                                        if (res.hasOwnProperty("data")) {
                                            dispatch(setUser((res as { data: User }).data));
                                        } else if (res.hasOwnProperty("error")) {
                                            throw new Error(JSON.stringify((res as { error: unknown }).error));
                                        }
                                    } catch (err) {
                                        console.error(err);
                                    }
                                }}
                            >
                                <Form className={popoverStyle.signin_form}>
                                    <FormControl
                                        control="email"
                                        name="email"
                                        label={Lang.auth.email}
                                        ErrorComponent={ErrorDisplay}
                                    />
                                    <FormControl
                                        control="password"
                                        name="password"
                                        label={Lang.auth.password}
                                        ErrorComponent={ErrorDisplay}
                                    />
                                    <button disabled={isLoading}>
                                        {!isLoading ? Lang.auth.signin.button : <Spinner />}
                                    </button>
                                </Form>
                            </Formik>
                            {window.location.pathname !== "/" && !user ? (
                                <NavButton
                                    to="/"
                                    text={Lang.menu.home[0]}
                                    span={Lang.menu.home[1]}
                                    Comp={<UilHome />}
                                />
                            ) : (
                                <NavButton
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
                        to="/#About"
                        text={Lang.menu.about[0]}
                        span={Lang.menu.about[1]}
                        Comp={<UilInfoCircle />}
                    />
                    {/* Video Tutorial 
                    <NavButton
                        to="/#Video"
                        text={Lang.menu.video[0]}
                        span={Lang.menu.video[1]}
                        Comp={<UilVideo />}
                    />*/}
                    {/* FAQ */}
                    <NavButton
                        to="/#FAQ"
                        text={Lang.menu.FAQ[0]}
                        span={Lang.menu.FAQ[1]}
                        Comp={<UilCommentQuestion />}
                    />
                    {user ? (
                        <NavButton
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
            </Popover.Panel>
        </Popover>
    );
};

export default Menu;
