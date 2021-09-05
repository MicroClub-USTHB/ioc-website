import React from "react";
import { Link } from "react-router-dom";

// resources
import hero_image from "../../resources/HeroImage-min.png";

// styles
import heroStyle from "./Hero.module.scss";

import { useRef } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { LangType } from "../../common/Lang/french";

interface LineProps {
    text: string;
}

const LineText: React.FC<LineProps> = ({ text }) => {
    return (
        <>
            <div className={heroStyle.line}></div>
            <span>{text}</span>
        </>
    );
};

const Hero = () => {
    const sectionRef = useRef<HTMLElement | null>(null);

    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;

    return (
        <section ref={sectionRef}>
            <div className={heroStyle.main_container}>
                <div className={`${heroStyle.hero_nav} ${heroStyle.first_nav}`}>
                    <Link to="/signin">
                        <LineText text={Lang.hero.left} />
                    </Link>
                </div>
                <div className={heroStyle.hero_image_container}>
                    <img src={hero_image} alt="Explorer" />
                    <div className={heroStyle.decoration}></div>
                    <div className={heroStyle.image_bottom_text}>
                        <button
                            onClick={(e) => {
                                window.scrollBy({
                                    top:
                                        sectionRef.current !== null
                                            ? sectionRef.current.offsetHeight
                                            : window.innerHeight,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            <LineText text={Lang.hero.middle} />
                        </button>
                    </div>
                </div>
                <div className={`${heroStyle.hero_nav} ${heroStyle.second_nav}`}>
                    <a href="https://microclub.net/">
                        <LineText text={Lang.hero.right} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
