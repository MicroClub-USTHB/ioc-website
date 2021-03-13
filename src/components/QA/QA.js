import React, {useState} from 'react';

// Style
import qaStyle from './QA.module.scss';

const QA = ({questionText, answerText}) => {
    const [AnswerExpand, setAnswerExpand] = useState(false);
    console.log('logged', AnswerExpand);
    let handleAnswerClick = (event) => {
        setAnswerExpand(!AnswerExpand);
    }
    return (
        <div
            className={qaStyle.container}
            onClick={handleAnswerClick}
        >
            <div className={qaStyle.question}>
                <div className={qaStyle.questionHolder}>
                    <span>{questionText}</span>
                    <div
                        className={qaStyle.questionLine}
                        style={{
                            backgroundColor: AnswerExpand? '#60C7CD' : 'transparent'
                        }}
                    ></div>
                </div>
                <div
                    className={qaStyle.expandSymbol}
                    style={{
                        transform: AnswerExpand? 'rotateZ(-90deg)' : 'rotateZ(90deg)'
                    }}
                >&gt;</div>
            </div>
            <div
                className={qaStyle.answerContainer}
                style={{
                    height: AnswerExpand? '8vw' : '0',
                    margin: AnswerExpand? '.8vw 0' : '0'
                }}
            >
                {answerText}
            </div>
        </div>
    );
}

export default QA;
