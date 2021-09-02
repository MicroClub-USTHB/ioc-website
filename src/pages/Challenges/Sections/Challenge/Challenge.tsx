import { RouteComponentProps } from "react-router-dom";

import { useGetDayQuery } from "../../../../redux/api/backend";

import { Day, ExtendedDay } from "../../../../types/Day";
// components
import StoryContainer from "../components/StoryContainer/StoryContainer";
import SubmitContainer from "../components/SubmitContainer/SubmitContainer";
import ChallengeContainer from "../components/ChallengeContainer/ChallengeContainer";

// styles
import challengeStyle from "./Challenge.module.scss";
import { DayLinkPassedState } from "../../../../types/Day";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/types";
interface ChallengeI extends RouteComponentProps {
    days: Array<Day> | undefined;
}
const Challenge = (props: ChallengeI) => {
    const { number: dayNumber, type, index = 0 } = props.location.state as DayLinkPassedState,
        { days } = props,
        language = useSelector<RootState>((state) => (state.common.language=== "english"?"EN":"FR")) as "EN" | "FR";
    const { data: day, isLoading: dayLoading } = useGetDayQuery({ _id: days ? days[index]._id : "" });
    console.log(day);

    let story = "",
        content = "",
        example = "",
        title = "",
        finishingMsg="";
    if (dayLoading) return <div>loading</div>;

    if (day !== undefined) {
        content =   day[type]!.content[language]!.content;
        title =   day[type]!.content[language]!.title;// may change into the day title
        story =   day[type]!.content[language]!.story;
        example =   day[type]!.content[language]!.example ?? "";
        finishingMsg=day[type]!.content[language]!.finishingMsg ?? "";
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
