import NavButton from "./components/NavButton/NavButton";
import Challenge from "./Sections/Challenge/Challenge";
import { Route, Switch, RouteComponentProps, useRouteMatch, match as matchI, Link } from "react-router-dom";
import { useGetDaysQuery } from "../../redux/api/backend";

// styles
import challengesStyle from "./Challenges.module.scss";

// resources
import { UilDashboard, UilEstate } from "@iconscout/react-unicons";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { LangType } from "../../common/Lang/french";
import Loader from "../../components/Loader/Loader";

import { Day } from "../../types/Day";
import Logo from "../../components/Logo/Logo";
const PlaceHolder = ({ text }: { text: string }) => {
    console.log(text);
    return (
        <div className={challengesStyle.loader_container}>
            <Loader transparent={true} />
            <p>{text}</p>
        </div>
    );
};

const Navigation = ({
    Lang,
    days,
    daysLoading,
    match,
}: {
    Lang: LangType;
    days: Day[] | undefined;
    daysLoading: boolean;
    match: matchI;
}) => {
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
                            title={Lang.challenges.leaderboard}
                            Icon={UilDashboard}
                        />
                    </li>
                    <li>
                        <NavButton
                            link={{ pathname: "/", state: { source: "/challenges" } }}
                            title={Lang.challenges.landing}
                            Icon={UilEstate}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};
const Container = ({
    text,
    days,
    daysLoading,
    match,
}: {
    text: string;
    days: Day[] | undefined;
    daysLoading: boolean;
    match: matchI;
}) => {
    return (
        <div className={challengesStyle.container}>
            {daysLoading ? (
                <PlaceHolder text={text} />
            ) : (
                <Switch>
                    <Route path={`${match.path}/`} exact render={() => <PlaceHolder text={text} />} />
                    <Route path={`${match.path}/:day`} component={Challenge} />
                </Switch>
            )}
        </div>
    );
};
const Challenges = (props: RouteComponentProps) => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
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
                daysLoading={daysLoading}
                text={!days ? Lang.challenges.no : Lang.challenges.select}
            />
        </main>
    );
};

export default Challenges;
