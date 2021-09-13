import Menu from "./Menu";
import { useEffect, useState } from "react";
//style
import NavigationStyle from "./Navigation.module.scss";
// icons
import { UilLinkedin, UilFacebook, UilInstagram, UilDiscord } from "@iconscout/react-unicons";
import { Switch } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/types";
import { setLanguage } from "../../redux/slices/common";
import { useSpring, animated } from "react-spring";

const Navigation = () => {
    const checked = useSelector<RootState>((state) => state.common.language) === "french";
    const [darkMode, setDarkMode] = useState(!!JSON.parse(localStorage.getItem("darkMode") || "null"));
    useEffect(() => {
        if (darkMode) window.document.body.classList.add("dark");
        else window.document.body.classList.remove("dark");
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);
    const dispatch = useDispatch<AppDispatch>();
    const [whole, setWhole] = useState(true);
    const { x } = useSpring({ config: { duration: 800 }, x: whole ? 0 : 1 });
    const { x: y } = useSpring({ config: { duration: 800 }, x: whole ? 0 : 1 });
    const dispatchWrappedAction = (checked: boolean) => {
        dispatch(setLanguage(checked));
    };
    return (
        <div className={NavigationStyle.nav}>
            <svg
                className={`moon ${NavigationStyle.theme_selector}`}
                onMouseEnter={() => {
                    setWhole(false);
                }}
                onMouseLeave={() => {
                    setWhole(true);
                }}
                onClick={() => {
                    setDarkMode(!darkMode);
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
            >
                {darkMode ? (
                    <g>
                        <animated.path
                            className="st1"
                            d={y.to({
                                output: [
                                    "M30,0C14,0,0,14,0,30C0,46,14,60,30,60C30,45,30,45,30,30C30,15,30,15,30,0Z",
                                    "M30,0C14,0,0,14,0,30C0,46,14,60,30,60C46,60,60,46,60,30C60,14,46,0,30,0Z",
                                ],
                            })}
                        />
                        <animated.path
                            className="st0"
                            d={x.to({
                                output: [
                                    "M30,0C46,0,60,14,60,30C60,46,46,60,30,60C30,45,30,45,30,30C30,15,30,15,30,0Z",
                                    "M30,0C46,0,60,14,60,30C60,46,46,60,30,60C14,60,0,46,0,30C0,13.8,13.8,0,30,0Z",
                                ],
                            })}
                        />
                    </g>
                ) : (
                    <g>
                        <animated.path
                            className="st0"
                            d={x.to({
                                output: [
                                    "M30,0C46,0,60,14,60,30C60,46,46,60,30,60C30,45,30,45,30,30C30,15,30,15,30,0Z",
                                    "M30,0C46,0,60,14,60,30C60,46,46,60,30,60C14,60,0,46,0,30C0,13.8,13.8,0,30,0Z",
                                ],
                            })}
                        />
                        <animated.path
                            className="st1"
                            d={y.to({
                                output: [
                                    "M30,0C14,0,0,14,0,30C0,46,14,60,30,60C30,45,30,45,30,30C30,15,30,15,30,0Z",
                                    "M30,0C14,0,0,14,0,30C0,46,14,60,30,60C46,60,60,46,60,30C60,14,46,0,30,0Z",
                                ],
                            })}
                        />
                    </g>
                )}
                <circle className="st2" cx="17.5" cy="19.5" r="3.4" />
                <circle className="st2" cx="20" cy="45" r="8.5" />
                <circle className="st2" cx="5.9" cy="36.4" r="3.9" />
                <circle className="st2" cx="6.3" cy="18.8" r="2.2" />
                <circle className="st2" cx="42.9" cy="11" r="4.8" />
                <circle className="st2" cx="56.2" cy="32.9" r="2.4" />
                <circle className="st2" cx="46.8" cy="48.2" r="3.9" />
            </svg>
            <div className={NavigationStyle.nav_social}>
                <Switch checked={checked} onChange={dispatchWrappedAction} className={NavigationStyle.switch_container}>
                    <div
                        className={`${NavigationStyle.switch_thumb} ${checked && NavigationStyle.switch_thumb_french}`}
                    >
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
                <a href="https://www.facebook.com/Micro.Club.USTHB">
                    <UilFacebook />
                </a>
                <a href="https://www.linkedin.com/in/micro-club-usthb/">
                    <UilLinkedin />
                </a>
                <a href="https://www.instagram.com/microclub_usthb/">
                    <UilInstagram />
                </a>
                <a href="https://discord.gg/RPFKAWu8r2" target="_blank">
                    <UilDiscord />
                </a>
            </div>
            {/* nav dropdown */}
            <Menu />
        </div>
    );
};

export default Navigation;
