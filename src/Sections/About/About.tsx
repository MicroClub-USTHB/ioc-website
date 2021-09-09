import React from "react";
import { useSelector } from "react-redux";
import { LangType } from "../../common/Lang/french";
import { RootState } from "../../redux/types";

// styles
import aboutStyle from "./About.module.scss";

const About = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    return (
        <section id="About" className={aboutStyle.about_container}>
            <div className={aboutStyle.top_section}>
                <h1 className={aboutStyle.section_title} title={Lang.event.title}>
                    {Lang.event.title}
                </h1>
                <p>
                    {Lang.event.description[0]}
                    <br />
                    <br />
                    {Lang.event.description[1]}
                </p>
            </div>
            <div className={aboutStyle.bottom_section}>
                <div className={aboutStyle.info_box}>
                    <h1>{Lang.event.about[0].title}</h1>
                    <p>{Lang.event.about[0].description}</p>
                </div>
                {/*<div className={aboutStyle.info_box}>
                    <h1>{Lang.event.about[1].title}</h1>
                    <p>{Lang.event.about[1].description}</p>
                </div>
                */}
            </div>
        </section>
    );
};

export default About;
