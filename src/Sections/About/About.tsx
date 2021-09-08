import React from "react";
import { useSelector } from "react-redux";
import { LangType } from "../../common/Lang/french";
import { RootState } from "../../redux/types";

// styles
import aboutStyle from "./About.module.scss";

const About = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    const language = (useSelector<RootState>((state) => state.common.language) as "english" | 'french');
    return (
        <section id="About" className={aboutStyle.about_container}>
            <div className={aboutStyle.left_section}>
                <h1 className={`${aboutStyle.section_title} ${language === "french" && aboutStyle.FR }`}>
                    {Lang.event.title}
                </h1>
                <p>
                    {Lang.event.description[0]}
                    <br />
                    <br />
                    {Lang.event.description[1]}
                </p>
            </div>
        </section>
    );
};

export default About;
