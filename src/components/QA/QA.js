import React, {useState} from 'react';
import { useSelector } from 'react-redux';

// Style
import qaStyle from './QA.module.scss';

const QA = ({questionText, answerText}) => {
    const isMobile = useSelector(state => state.workspace.isMobile);
    const [AnswerExpand, setAnswerExpand] = useState(false);
    let handleAnswerClick = (event) => {
        if (!isMobile) {
            setAnswerExpand(!AnswerExpand);
        }
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
                            backgroundColor: isMobile? '#60C7CD' : AnswerExpand? '#60C7CD' : 'transparent'
                        }}
                    ></div>
                </div>
                {
                    !isMobile && (
                        <div
                            className={qaStyle.expandSymbol}
                            style={{
                                transform: AnswerExpand? 'rotateZ(-90deg)' : 'rotateZ(90deg)'
                            }}
                        >&gt;</div>
                    )
                }
            </div>
            <div
                className={qaStyle.answerContainer}
                style={{
                    height: !isMobile && (AnswerExpand? '8vw' : '0'),
                    margin: !isMobile && (AnswerExpand? '.8vw 0' : '0')
                }}
            >
                {answerText}
            </div>
        </div>
    );
}

export default QA;
