import React, { CSSProperties } from "react";

// styles
import dayStyle from "./Day.module.scss";

interface ChallengeState {
    completed: boolean;
    points: number;
}

export interface DayProps {
    title: string;
    main: ChallengeState;
    side: ChallengeState;
}

const Day = (props: DayProps) => {
    const { title, main, side } = props;
    return (
        <div
            className={`${dayStyle.container} ${
                side.completed ? dayStyle.completed : main.completed ? dayStyle.half : ""
            }`}
        >
            <h2 className={dayStyle.title}>{title}</h2>
            <div className={`${dayStyle.challenge} ${dayStyle.day}`}>
                <span>Main</span>
                <span>Side</span>
            </div>
            <div className={`${dayStyle.challenge} ${dayStyle.status}`}>
                <span>{main.completed ? "Completed" : "Not Completed"}</span>
                <span>{side.completed ? "Completed" : "Not Completed"}</span>
            </div>
            <div className={`${dayStyle.challenge} ${dayStyle.score}`}>
                <span>{`${main.points ? main.points.toFixed(0) : "No"} Points`}</span>
                <span>{`${side.points ? side.points.toFixed(0) : "No"} Points`}</span>
            </div>
        </div>
    );
};

export default Day;
