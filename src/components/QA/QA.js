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
        expandFunc();
    }

    let expand;
    let expandFunc = () => {
        for (let i = 0; i <= 100; i++) {
            if (i === 100) {
                expand = 'fit-content';
            }
            expand = `${(8/100) * i}vw`;
        }
    }
    return (
        <div
            className={qaStyle.container}
            onClick={handleAnswerClick}
            data-aos="fade-right"
        >
            <div className={qaStyle.question}>
                <div className={qaStyle.questionHolder}>
                    <span>{questionText}</span>
                    <div
                        className={qaStyle.questionLine}
                        style={{
                            backgroundColor: isMobile? '#0D131B' : AnswerExpand? '#0D131B' : 'transparent'
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
            {
                (AnswerExpand || isMobile) && (
                    <div
                        className={`${qaStyle.answerContainer} ${!AnswerExpand && qaStyle.answerUnexpand}`}
                    >
                        {answerText}
                    </div>
                )
            }
        </div>
    );
}

export default QA;
