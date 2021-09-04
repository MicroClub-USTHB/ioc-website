import { Popover } from "@headlessui/react";
import React, { useState } from "react";
import * as yup from "yup";
import { usePopper } from "react-popper";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import FormControl from "../../../../common/Formik/FormControl";
import ErrorDisplay from "../../../../common/Formik/ErrorDisplay/ErrorDisplay";
import Spinner from "../../../../common/Spinner/Spinner";

import { SignInValues, User } from "../../../../types/User";
import { useSignInMutation } from "../../../../redux/api/backend";
import { LangType } from "../../../../common/Lang/french";
import { AppDispatch, RootState } from "../../../../redux/types";
// icons
import { UilBars, UilInfoCircle, UilVideo, UilCommentQuestion, UilUser } from "@iconscout/react-unicons";

// styles
import popoverStyle from "./Navigation.module.scss";
import { setUser } from "../../../../redux/slices/user";
const initial_values: SignInValues = {
    email: "",
    password: "",
};

const validation_schema = new yup.ObjectSchema({
    email: yup.string().email("Must be a valid email.").required("This field is required."),
    password: yup.string().min(8, "Password must be at least 8 characters long.").required(),
});
interface navButtonI {
    href: string;
    Comp: React.ReactNode;
    text: string;
    span: string;
    user?: boolean;
}
const NavButton: React.FC<navButtonI> = ({ href, Comp, text, span, user = false }) => {
    return (
        <li>
            <a href={href} className={`${user ? popoverStyle.nav_main : ""} ${popoverStyle.nav_button}`}>
                <div className={popoverStyle.nav_icon_container}>{Comp}</div>
                <div className={popoverStyle.nav_button_text}>
                    <span>{text} </span>
                    <span> {span}</span>
                </div>
            </a>
        </li>
    );
};
const Navigation = () => {
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
                            href="/challenges"
                            text={user.userName}
                            span={"Start the Challenges"}
                            Comp={<UilUser />}
                            user={true}
                        />
                    ) : (
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
                    )}
                    {/* The event */}
                    <NavButton
                        href="#About"
                        text={"The event"}
                        span={"Learn more about the event"}
                        Comp={<UilInfoCircle />}
                    />
                    {/* Video Tutorial */}
                    <NavButton
                        href="#"
                        text={"Participation tutorial"}
                        span={"Watch a video tutorial"}
                        Comp={<UilVideo />}
                    />
                    {/* FAQ */}
                    <NavButton href="#" text={"FAQ"} span={"Questions and answers"} Comp={<UilCommentQuestion />} />
                </ul>
            </Popover.Panel>
        </Popover>
    );
};

export default Navigation;
