import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { LangType } from "../../common/Lang/french";
import { Link } from "react-router-dom";

// styles
import footerStyle from "./Footer.module.scss";

const Footer = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    return (
        <section id="Footer" className={footerStyle.footer_container}>
            <div className={footerStyle.card}>
                <svg viewBox="0 0 480 157" xmlns="http://www.w3.org/2000/svg">
                    <path d="M480 0C387.863 58.6241 291.299 91.1217 202.151 81.5858C93.1924 69.9307 51.9209 146.204 0 148.967V0H480Z" />
                </svg>

                <h1 className={footerStyle.title}>IMPACT OF CODE</h1>
                <div className={footerStyle.subTitles}>
                    <h2>
                        {Lang.footer.titles[0][0]} <a href="https://microclub.net/">Micro Club</a>{" "}
                        {Lang.footer.titles[0][1]}
                    </h2>
                    <Link to="/challenges">
                        <h2>{Lang.footer.titles[1]}</h2>
                    </Link>
                </div>

                <svg viewBox="0 0 700 215" xmlns="http://www.w3.org/2000/svg">
                    <path d="M345 130C550 120 700 0 700 0L700 215H0C45 190 175 140 345 130" />
                </svg>
            </div>
        </section>
    );
};

export default Footer;
