import React from "react";
import { Link } from "react-router-dom";

// icons
import { UilLinkedin, UilFacebook, UilInstagram } from "@iconscout/react-unicons";

// resources
import hero_image from "../../resources/HeroImage-min.png";

// styles
import heroStyle from "./Hero.module.scss";
import Navigation from "./components/Navigation/Navigation";
import { useRef } from "react";
import { Switch } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/types";
import { setLanguage } from "../../redux/slices/common";
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
    const checked = useSelector<RootState>((state) => state.common.language) === "french";
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    const dispatch = useDispatch<AppDispatch>();
    const dispatchWrappedAction = (checked: boolean) => {
        dispatch(setLanguage(checked));
    };
    return (
        <section ref={sectionRef}>
            <div className={heroStyle.navigation}>
                <Link to="/">Impact of Code</Link>
                <div className={heroStyle.nav}>
                    <div className={heroStyle.nav_social}>
                        <Switch
                            checked={checked}
                            onChange={dispatchWrappedAction}
                            className={heroStyle.switch_container}
                        >
                            <div className={`${heroStyle.switch_thumb} ${checked && heroStyle.switch_thumb_french}`}>
                                {checked ? (
                                    <img
                                        src="https://cdn0.iconfinder.com/data/icons/flat-circle-flag/180/circle_france-512.png"
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/512px-United-states_flag_icon_round.svg.png"
                                        alt=""
                                    />
                                )}
                            </div>
                        </Switch>
                        <a href="/">
                            <UilFacebook />
                        </a>
                        <a href="/">
                            <UilLinkedin />
                        </a>
                        <a href="/">
                            <UilInstagram />
                        </a>
                    </div>
                    {/* nav dropdown */}
                    <Navigation />
                </div>
            </div>
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
