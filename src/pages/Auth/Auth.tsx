import { Link, RouteComponentProps } from "react-router-dom";

import AuthForm from "./AuthForm";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { LangType } from "../../common/Lang/french";

// styles
import AuthFormStyle from "./Auth.module.scss";
import Loader from "../../components/Loader/Loader";
import { UilHome } from "@iconscout/react-unicons";

const Signup = (props: RouteComponentProps) => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    return (
        <main className={AuthFormStyle.container}>
            <div className={AuthFormStyle.background_dec}>
                <Loader transparent />
                <Link to="/">
                    <UilHome />
                    <span>{Lang.challenges.landing}</span>
                </Link>
            </div>
            <div className={AuthFormStyle.content_container}>
                <svg viewBox="0 0 200 120">
                    <path d="M0,120C0,100,180,50,200,0H0Z" />
                </svg>
                <div>
                    <h1 title={Lang.auth.signup.title} className={AuthFormStyle.title}>
                        {Lang.auth.signup.title}
                    </h1>
                    <AuthForm />
                </div>
                <svg viewBox="0 0 430 170">
                    <path d="M430,170V0h0C350,60,300,80,260,90c-60,12-90,2-180,35C52,135,20,150,0,170Z" />
                </svg>
            </div>
        </main>
    );
};

export default Signup;
