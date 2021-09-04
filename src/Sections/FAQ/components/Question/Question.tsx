import React from "react";

// styles
import questionStyle from "./Question.module.scss";

interface Props {
    question: string;
    key?: string | number;
}

const Question: React.FC<Props> = (props) => {
    const { question } = props;
    return (
        <div className={questionStyle.question_container}>
            <div className={questionStyle.asker}>
                <div className={questionStyle.asker_icon}>
                    <span>?</span>
                </div>
                <span>Question</span>
            </div>
            <div className={questionStyle.question}>{question}</div>
        </div>
    );
};

export default Question;
