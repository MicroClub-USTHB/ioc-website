import NavButton from "./components/NavButton/NavButton";
import Challenge from "./Sections/Challenge/Challenge";
import {
    Route,
    Switch,
    RouteComponentProps,
    useRouteMatch,
    match as matchI,
    Link,
    useLocation,
} from "react-router-dom";
import { useGetDaysQuery } from "../../redux/api/backend";

// styles
import challengesStyle from "./Challenges.module.scss";

// resources
import { UilDashboard, UilEstate } from "@iconscout/react-unicons";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { LangType } from "../../common/Lang/french";

import { Day } from "../../types/Day";
import Logo from "../../components/Logo/Logo";
import Leaderboard from "./Sections/Leaderboard/Leaderboard";
import PlaceHolder from "./components/PlaceHolder/PlaceHolder";
import { User } from "../../types/User";

const Navigation = ({
    Lang,
    days,
    match,
    daysLoading,
}: {
    Lang: LangType;
    days: Day[] | undefined;
    daysLoading: boolean;
    match: matchI;
}) => {
    const user = useSelector<RootState>((state) => state.user) as User;
    console.log(user);
    return (
        <div className={challengesStyle.navigation}>
            <Link to="/">
                <Logo />
            </Link>
            <div>
                <ul className={challengesStyle.challenges_list}>
                    {daysLoading ? (
                        <li className={challengesStyle.loading_list_indicator}>Loading...</li>
                    ) : (
                        days?.map((day, index) => {
                            return (
                                <li key={day._id}>
                                    <NavButton
                                        title={day.title}
                                        iconReplacement={day.number.toString()}
                                        isChallengeLink={true}
                                        link={`/challenges/${day._id}`}
                                        slide={
                                            !user.days.every((elm) => {
                                                return !(elm.day === day._id && elm.side);
                                            })
                                        }
                                    />
                                </li>
                            );
                        })
                    )}
                </ul>
                <hr className={challengesStyle.divider} />
                <ul className={challengesStyle.navigation_list}>
                    <li>
                        <NavButton
                            link={`/challenges/leaderboard`}
                            title={Lang.challenges.leaderboard}
                            Icon={UilDashboard}
                        />
                    </li>
                    <li>
                        <NavButton link={"/"} title={Lang.challenges.landing} Icon={UilEstate} />
                    </li>
                </ul>
            </div>
        </div>
    );
};
const Container = ({
    text,
    days,
    pathname,
    match,
    daysLoading,
}: {
    days: Day[] | undefined;
    text: string;
    pathname: string;
    daysLoading: boolean;
    match: matchI;
}) => {
    return (
        <div className={challengesStyle.container}>
            <Switch>
                <Route path={`${match.path}/leaderboard`} exact component={Leaderboard} />
                {daysLoading ? (
                    <PlaceHolder text={text} />
                ) : (
                    <Route path={`${match.path}/:day/:type`} exact component={Challenge} />
                )}
                <Route path={`${match.path}/`} render={() => <PlaceHolder text={text} />} />
            </Switch>
        </div>
    );
};
const Challenges = (props: RouteComponentProps) => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    const location = useLocation();

    const match = useRouteMatch();
    const { data: days, isLoading: daysLoading } = useGetDaysQuery(null);
    return (
        <main className={challengesStyle.outer_container}>
            {/* left navigation bar */}
            <Navigation Lang={Lang} days={days} daysLoading={daysLoading} match={match} />
            {/* right content */}
            <Container
                days={days}
                match={match}
                pathname={location.pathname}
                daysLoading={daysLoading}
                text={!days || days.length < 1 ? Lang.challenges.no : Lang.challenges.select}
            />
        </main>
    );
};

export default Challenges;
