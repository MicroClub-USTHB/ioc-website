import { UilClipboardNotes } from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
import { LangType } from "../../../../../../common/Lang/french";
import { RootState } from "../../../../../../redux/types";

// styles
import challengeStyle from "./ChallengeContainer.module.scss";

const ChallengeContainer = (props: { challenge: string; example: string }) => {
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;
    return (
        <div className={challengeStyle.challenge_container_outer}>
            <div className={challengeStyle.challenge_container_inner}>
                <h1 className={challengeStyle.title_container}>
                    <span className={`${challengeStyle.title_number} ${challengeStyle.title_icon}`}>
                        <UilClipboardNotes />
                    </span>
                    <span className={challengeStyle.title}>{Lang.challenges.task}</span>
                </h1>
                <div
                    className={challengeStyle.task}
                    dangerouslySetInnerHTML={{
                        __html:
                            props.challenge +
                            (props.example && `<br /><br />${props.example}`) +
                            "<br /><br /><br /><br />",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ChallengeContainer;
