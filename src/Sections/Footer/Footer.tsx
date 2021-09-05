import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { LangType } from "../../common/Lang/french";
import { Link } from "react-router-dom";

// styles
import footerStyle from "./Footer.module.scss";

// resources
import footer1 from "../../resources/Footer1-min.png";
import footer2 from "../../resources/Footer2-min.png";

const Footer = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    return (
        <section id="Footer" className={footerStyle.footer_container}>
            <div className={footerStyle.card_container}>
                <img className={footerStyle.dec1} src={footer1} alt="" />
                <div className={footerStyle.content_container}>
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
                </div>
                <img className={footerStyle.dec2} src={footer2} alt="" />
            </div>
        </section>
    );
};

export default Footer;
