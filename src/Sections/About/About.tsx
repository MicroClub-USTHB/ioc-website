import React from "react";
import { useSelector } from "react-redux";
import { LangType } from "../../common/Lang/french";
import { RootState } from "../../redux/types";

// resources
import about1 from "../../resources/About1-min.png";
import about2 from "../../resources/About2-min.png";

// styles
import aboutStyle from "./About.module.scss";

const About = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    const language = (useSelector<RootState>((state) => state.common.language) as "english") || "french";
    return (
        <section id="About" className={aboutStyle.about_container}>
            <div className={aboutStyle.left_section}>
                <h1 className={aboutStyle.section_title + (language === "english" ? "" : " " + aboutStyle.FR)}>
                    {Lang.event.title}
                </h1>
                <p>
                    {Lang.event.description[0]}
                    <br />
                    <br />
                    {Lang.event.description[1]}
                </p>
            </div>
            <div className={aboutStyle.right_section}>
                <div className={aboutStyle.info_box_top}>
                    <img src={about1} alt="" />
                    <div className={aboutStyle.top_description}>
                        <h2>{Lang.event.about[0].title}</h2>
                        {Lang.event.about[0].description}
                    </div>
                </div>
                {/*
                <div className={aboutStyle.info_box_bottom}>
                    <img src={about2} alt="" />
                    <div className={aboutStyle.bottom_description}>
                        <h2>{Lang.event.about[1].title}</h2>
                        {Lang.event.about[1].description}
                    </div>
                </div>*/}
            </div>
        </section>
    );
};

export default About;
