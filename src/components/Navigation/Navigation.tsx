import Menu from "./Menu";
import { Link } from "react-router-dom";
//style
import NavigationStyle from "./Navigation.module.scss";
// icons
import { UilLinkedin, UilFacebook, UilInstagram } from "@iconscout/react-unicons";
import { Switch } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/types";
import { setLanguage } from "../../redux/slices/common";

const Navigation = () => {
    const checked = useSelector<RootState>((state) => state.common.language) === "french";
    const dispatch = useDispatch<AppDispatch>();
    const dispatchWrappedAction = (checked: boolean) => {
        dispatch(setLanguage(checked));
    };
    return (
        <div className={NavigationStyle.nav}>
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
            <Menu />
        </div>
    );
};

export default Navigation;
