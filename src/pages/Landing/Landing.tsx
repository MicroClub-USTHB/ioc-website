import React, { useState } from "react";
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
import DialogModal from "../Challenges/Sections/Challenge/components/AfterStory/DialogModal";

const Landing: React.FC<RouteComponentProps> = () => {
    const [ShowEventEndModal, setShowEventEndModal] = useState<boolean>((localStorage.getItem('end_of_event_modal_seen') ?? 'false') !== 'true');
    const wrappedSetEventEndModal = (show: boolean) => {
        if (!show) localStorage.setItem('end_of_event_modal_seen', 'true');
        setShowEventEndModal(show)
    }
    useEffect(() => {
        const tag = window.location.href.match(/#\w+/);
        if (tag) window.document.querySelector(tag[0])?.scrollIntoView({ behavior: "smooth" });
    }, []);
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
            <DialogModal
                title="The Journey Has Ended."
                content="This event has ended, thank you for participating, and stay in touch for future events."
                show={ShowEventEndModal}
                setShow={wrappedSetEventEndModal as any}
                button="Understood"
            />
        </main>
    );
};

export default Landing;
