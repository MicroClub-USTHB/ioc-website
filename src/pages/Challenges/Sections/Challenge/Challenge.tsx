import { RouteComponentProps, useLocation } from "react-router-dom";

import { useGetDayQuery, useGetDaysQuery } from "../../../../redux/api/backend";

import { ExtendedDay } from "../../../../types/Day";
// components
import StoryContainer from "../components/StoryContainer/StoryContainer";
import SubmitContainer from "../components/SubmitContainer/SubmitContainer";
import ChallengeContainer from "../components/ChallengeContainer/ChallengeContainer";

// styles
import challengeStyle from "./Challenge.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";

const Challenge: React.FC<RouteComponentProps> = (props) => {
    const location = useLocation();
    let [dayNumber, type]: [string | number, "main" | "side"] = location.pathname.split("/").slice(-2) as [
        string,
        "main" | "side"
    ];
    dayNumber = Number(dayNumber[dayNumber.length - 1]);
    const { data: days } = useGetDaysQuery(null);
    const language = useSelector<RootState>((state) => (state.common.language === "english" ? "EN" : "FR")) as
        | "EN"
        | "FR";
    const { data: day, isLoading: dayLoading }: { data?: ExtendedDay; isLoading: boolean } = useGetDayQuery({
        _id: days ? days[dayNumber - 1]._id : "",
    });

    let story = "",
        content = "",
        example = "",
        title = "",
        finishingMsg = "";
    if (dayLoading) return <div>loading</div>;

    if (day !== undefined) {
        content = day[type]!.content[language]!.content;
        title = day[type]!.content[language]!.title; // may change into the day title
        story = day[type]!.content[language]!.story;
        example = day[type]!.content[language]!.example ?? "";
        finishingMsg = day[type]!.content[language]!.finishingMsg ?? "";
    }

    return (
        <section className={challengeStyle.container}>
            <div className={challengeStyle.left_container}>
                <StoryContainer story={story} title={title} dayNumber={String(dayNumber)} />
                <SubmitContainer dayNumber={String(dayNumber)} />
            </div>
            <ChallengeContainer challenge={content} example={example} />
        </section>
    );
};

export default Challenge;
