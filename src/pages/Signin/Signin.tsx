import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Display from "./sections/Display/Display";

// styles
import loginStyle from "./Signin.module.scss";

const Signin = (props: RouteComponentProps) => {
    const dec_array = Array(9)
        .fill(0)
        .map((elm, i) => <div key={"background" + i}>IMPACT OF CODE IMPACT OF CODE IMPACT OF CODE</div>);
    return (
        <main className={loginStyle.container}>
            <div className={loginStyle.background_dec}>{dec_array}</div>
            <Display />
        </main>
    );
};

export default Signin;
