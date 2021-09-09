import React from "react";
import { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

// Sections
import About from "../../Sections/About/About";
import FAQ from "../../Sections/FAQ/FAQ";
import Footer from "../../Sections/Footer/Footer";
import Hero from "../../Sections/Hero/Hero";
import Organizers from "../../Sections/Organizers/Organizers";
import Numbers from "../../Sections/Numbers/Numbers";
import Video from "../../Sections/Video/Video";
import LogoV from "../../components/LogoV/LogoV";

// styles
import landingStyle from "./Landing.module.scss";

const Landing: React.FC<RouteComponentProps> = () => {
    useEffect(() => {
        const tag = window.location.href.match(/#\w+/);
        if (tag) {
            window.document.querySelector(tag[0])?.scrollIntoView({ behavior: "smooth" });
        }
    });
    return (
        <main className={landingStyle.main_container}>
            <LogoV className={landingStyle.logo} />
            <Hero />
            <About />

            <Organizers />
            <Numbers />
            <Video />
            <FAQ />
            <Footer />
        </main>
    );
};

export default Landing;
