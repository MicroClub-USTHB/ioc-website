import { RouteComponentProps } from "react-router-dom";

import AuthForm from "./AuthForm";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { LangType } from "../../common/Lang/french";
import bottomImg from "../../resources/BottomAuth.svg";

// styles
import AuthFormStyle from "./Auth.module.scss";
import Loader from "../../components/Loader/Loader";

const Signup = (props: RouteComponentProps) => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    return (
        <main className={AuthFormStyle.container}>
            <div className={AuthFormStyle.background_dec}>
                <Loader transparent />
            </div>
            <div className={AuthFormStyle.content_container}>
                <div>
                    <h1 className={AuthFormStyle.title}>{Lang.auth.signup.title}</h1>
                    <AuthForm />
                </div>
            </div>
        </main>
    );
};

export default Signup;
