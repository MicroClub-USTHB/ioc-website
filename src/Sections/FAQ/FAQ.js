import React from 'react';

// Components
import QA from '../../components/QA/QA';

// Style
import faqStyle from './FAQ.module.scss';

// Images
import faqPhoto from '../../media/faqPhoto-min.png';
import faqBG from '../../media/faq-bg.png';
import { useSelector } from 'react-redux';

const FAQ = () => {
    const isMobile = useSelector(state => state.workspace.isMobile);
    return (
        <section className={faqStyle.section}>
            <div>
                <h1 className={faqStyle.title}>Have a question? Here are the answers!</h1>
            </div>
            <div className={faqStyle.mainSection}>
                <ul className={faqStyle.qaList}>
                    <li className={faqStyle.qaItem}>
                        <QA
                            questionText="What is the meaning of life?"
                            answerText="Sol is a solar day on Mars; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian as seen by an observer on Mars. It is one of several units for timekeeping on Mars. A sol is slightly longer than an Earth day.
                            Generally speaking, your texts shouldn't be too long. Ideally, you want to keep their length to about that of a tweet. Sending long texts can be annoying to the people on the receiving end, especially if they're busy at work or trying to complete a proje "
                            />
                    </li>
                    <li className={faqStyle.qaItem}>
                        <QA
                            questionText="Why should I care?"
                            answerText="Sol is a solar day on Mars; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian as seen by an observer on Mars. It is one of several units for timekeeping on Mars. A sol is slightly longer than an Earth day.
                            Generally speaking, your texts shouldn't be too long. Ideally, you want to keep their length to about that of a tweet. Sending long texts can be annoying to the people on the receiving end, especially if they're busy at work or trying to complete a proje "
                            />
                    </li>
                    <li className={faqStyle.qaItem}>
                        <QA
                            questionText="Is thinking about changing the way you think even possible?"
                            answerText="Sol is a solar day on Mars; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian as seen by an observer on Mars. It is one of several units for timekeeping on Mars. A sol is slightly longer than an Earth day.
                            Generally speaking, your texts shouldn't be too long. Ideally, you want to keep their length to about that of a tweet. Sending long texts can be annoying to the people on the receiving end, especially if they're busy at work or trying to complete a proje "
                            />
                    </li>
                                    <li className={faqStyle.qaItem}>
                        <QA
                            questionText="Apples, Oranges, or both?"
                            answerText="Sol is a solar day on Mars; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian as seen by an observer on Mars. It is one of several units for timekeeping on Mars. A sol is slightly longer than an Earth day.
                            Generally speaking, your texts shouldn't be too long. Ideally, you want to keep their length to about that of a tweet. Sending long texts can be annoying to the people on the receiving end, especially if they're busy at work or trying to complete a proje "
                            />
                    </li>
                                    <li className={faqStyle.qaItem}>
                        <QA
                            questionText="Coffeee or Teaaaaa?"
                            answerText="Sol is a solar day on Mars; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian as seen by an observer on Mars. It is one of several units for timekeeping on Mars. A sol is slightly longer than an Earth day.
                            Generally speaking, your texts shouldn't be too long. Ideally, you want to keep their length to about that of a tweet. Sending long texts can be annoying to the people on the receiving end, especially if they're busy at work or trying to complete a proje "
                            />
                    </li>
                </ul>
                {
                    !isMobile && (
                        <>
                            <div className={faqStyle.imageContainer}>
                                <img className={faqStyle.image} src={faqPhoto} alt="Raider." />
                                <div className={faqStyle.imagePlatform}></div>
                            </div>
                            <img className={faqStyle.bg} src={faqBG} alt="" />
                        </>
                    )
                }
            </div>
        </section>
    );
}

export default FAQ;
