import React from "react";

// styles
import displayStyle from "./Display.module.scss";

// resources
import signup_bg from "../../../../resources/Signup1-min.png";
import SignupForm from "./components/SignupForm/SignupForm";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
import { LangType } from "../../../../common/Lang/french";

const Display = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    return (
        <section className={displayStyle.display_container}>
            <img className={displayStyle.image_bg} src={signup_bg} alt="" />
            <div className={displayStyle.content_container}>
                <h1 className={displayStyle.title}>{Lang.auth.signup.title}</h1>
                <SignupForm />
            </div>
        </section>
    );
};

export default Display;
