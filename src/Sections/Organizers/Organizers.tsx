import React from "react";
import { useSelector } from "react-redux";
import { LangType } from "../../common/Lang/french";
import { RootState } from "../../redux/types";
import Organizer from "./components/Organizer/Organizer";
import { Organizer as OrganizerType } from "./types";

// Resources
import etudz from "../../resources/Etudz.png";
import mclogo from "../../resources/mc-logo-min.svg";

// Styles
import orgStyle from "./Organizers.module.scss";

const Organizers = () => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    const language = useSelector<RootState>((state) => state.common.language) as "english" | "french";
    const org_list: OrganizerType[] = [
        /* MICRO CLUB */
        {
            title: Lang.organizers.org_list.mc.title,
            description: Lang.organizers.org_list.mc.description,
            links: [
                { type: "instagram", link: "https://www.instagram.com/microclub_usthb/" },
                { type: "facebook", link: "https://www.facebook.com/Micro.Club.USTHB" },
                { type: "linkedin", link: "https://www.linkedin.com/in/micro-club-usthb/" },
                { type: "web", link: "https://microclub.net/" },
            ],
            image: {
                link: mclogo,
                bg: "dark",
            },
            orientation: "left",
        },
        /* Etudz Academy */
        {
            title: Lang.organizers.org_list.ea.title,
            description: Lang.organizers.org_list.ea.description,
            links: [
                { type: "instagram", link: "https://www.instagram.com/etudzacademy" },
                { type: "facebook", link: "https://www.facebook.com/etudz.academy" },
                { type: "linkedin", link: "https://www.linkedin.com/in/etudz-academy-6523021a1/" },
                { type: "web", link: "https://etudz.academy/" },
            ],
            image: {
                link: etudz,
                bg: "light",
            },
            orientation: "right",
        },
    ];
    return (
        <section className={orgStyle.section_container}>
            <div className={orgStyle.title}>
                <h1 className={orgStyle.section_title} title={Lang.organizers.title}>
                    {Lang.organizers.title}
                </h1>
            </div>
            <ul className={orgStyle.list}>
                {org_list.map((item, index) => (
                    <li key={index}>
                        {" "}
                        <Organizer {...item} />{" "}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Organizers;
