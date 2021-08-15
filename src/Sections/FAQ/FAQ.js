import React from 'react';
import { useSelector } from 'react-redux';

// Components
import QA from '../../components/QA/QA';

// Style
import faqStyle from './FAQ.module.scss';

// Images
import circleDec from '../../media/circlesDec.svg';
import questionHand from '../../media/questionImage.svg';
import twoLineDec from '../../media/decoration-2.svg';

const FAQ = () => {
    const isMobile = useSelector(state => state.workspace.isMobile)
    return (
        <section className={faqStyle.section}>
            <h1 className={faqStyle.title}>FAQ</h1>
            {
                !isMobile && <img className={ faqStyle.twoLineDec} src={twoLineDec} alt="" />
            }
            <div className={faqStyle.content}>
                <div className={faqStyle.qaList}>
                    <QA
                        questionText={"What is the meaning of life?"}
                        answerText={"Sol is a solar day on Mars; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian as seen by an observer on Mars. It is one of several units for timekeeping on Mars. A sol is slightly longer than an Earth day. Generally speaking, your texts shouldn't be too long. Ideally, you want to keep their length to about that of a tweet. Sending long texts can be annoying to the people on the receiving end, especially if they're busy at work or trying to complete a project."}
                        />
                    <QA
                        questionText={"Why should I care?"}
                        answerText={"Sol is a solar day on Mars; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian as seen by an observer on Mars. It is one of several units for timekeeping on Mars. A sol is slightly longer than an Earth day. Generally speaking, your texts shouldn't be too long. Ideally, you want to keep their length to about that of a tweet. Sending long texts can be annoying to the people on the receiving end, especially if they're busy at work or trying to complete a project."}
                        />
                    <QA
                        questionText={"This is the last time I redesign this I hope."}
                        answerText={"Sol is a solar day on Mars; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian as seen by an observer on Mars. It is one of several units for timekeeping on Mars. A sol is slightly longer than an Earth day. Generally speaking, your texts shouldn't be too long. Ideally, you want to keep their length to about that of a tweet. Sending long texts can be annoying to the people on the receiving end, especially if they're busy at work or trying to complete a project."}
                        />
                    <QA
                        questionText={"Apples, oranges, or both?"}
                        answerText={"Sol is a solar day on Mars; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian as seen by an observer on Mars. It is one of several units for timekeeping on Mars. A sol is slightly longer than an Earth day. Generally speaking, your texts shouldn't be too long. Ideally, you want to keep their length to about that of a tweet. Sending long texts can be annoying to the people on the receiving end, especially if they're busy at work or trying to complete a project."}
                        />
                    <QA
                        questionText={"Coffee, or teaaa?"}
                        answerText={"Sol is a solar day on Mars; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian as seen by an observer on Mars. It is one of several units for timekeeping on Mars. A sol is slightly longer than an Earth day. Generally speaking, your texts shouldn't be too long. Ideally, you want to keep their length to about that of a tweet. Sending long texts can be annoying to the people on the receiving end, especially if they're busy at work or trying to complete a project."}
                        />
                </div>
                {
                    !isMobile && (
                        <>
                            <div className={faqStyle.imagery}>
                                <img className={faqStyle.circleDec} src={circleDec} alt="" />
                                <img data-aos="fade-down" className={faqStyle.questionHand} src={questionHand} alt="" />
                            </div>
                        </>
                    )
                }
            </div>
            {
                !isMobile && (
                    <>
                        <div className={`${faqStyle.leftRect} decorationRect`}></div>
                        <div className={`${faqStyle.rightRect} decorationRect`}></div>
                    </>
                )
            }
        </section>
    );
}

export default FAQ;
