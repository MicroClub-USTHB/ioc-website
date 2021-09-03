import NavButton from "./components/NavButton/NavButton";
import Challenge from "./Sections/Challenge/Challenge";
import { Route, RouteComponentProps, Switch, useRouteMatch } from "react-router-dom";
import { useGetDaysQuery } from "../../redux/api/backend";

// styles
import challengesStyle from "./Challenges.module.scss";

// resources
import logo from "../../resources/Challenges-min.png";
import { UilDashboard, UilEstate } from "@iconscout/react-unicons";
import Spinner from "../../common/Spinner/Spinner";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { LangType } from "../../common/Lang/french";
import Leaderboard from "./Sections/Leaderboard/Leaderboard";

const Challenges = (props: RouteComponentProps) => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    const match = useRouteMatch();
    const { data: days, isLoading: daysLoading } = useGetDaysQuery(null);
    return (
        <main className={challengesStyle.outer_container}>
            {/* left navigation bar */}
            <div className={challengesStyle.navigation}>
                <div className={challengesStyle.header}>
                    <img className={challengesStyle.logo} src={logo} alt="" />
                    <h1 className={challengesStyle.title}>
                        IMPACT
                        <br />
                        OF
                        <br />
                        CODE
                    </h1>
                </div>
                <div>
                    <ul className={challengesStyle.challenges_list}>
                        {daysLoading ? (
                            <li className={challengesStyle.loading_list_indicator}>Loading...</li>
                        ) : (
                            days?.map((day, index) => (
                                <li key={day._id}>
                                    <NavButton
                                        title={day.title}
                                        iconReplacement={day.number.toString()}
                                        number={day.number}
                                        isChallengeLink={true}
                                    />
                                </li>
                            ))
                        )}
                    </ul>
                    <hr className={challengesStyle.divider} />
                    <ul className={challengesStyle.navigation_list}>
                        <li>
                            <NavButton
                                link={{ pathname: `${match.path}/leaderboard`, state: { source: "/challenges" } }}
                                title={Lang.challenges_leaderboard_button}
                                Icon={UilDashboard}
                            />
                        </li>
                        <li>
                            <NavButton
                                link={{ pathname: "/", state: { source: "/challenges" } }}
                                title={Lang.challenges_landing_button}
                                Icon={UilEstate}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            {/* right content */}
            <Switch>
                <Route path={`${match.path}/leaderboard`} component={Leaderboard} />
                <Route path={`${match.path}/:day`} component={Challenge} />
            </Switch>
        </main>
    );
};

export default Challenges;
