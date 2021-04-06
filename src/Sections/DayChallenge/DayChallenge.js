import { Field, Form, Formik } from 'formik';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import md5 from 'md5';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// Style
import challengeStyle from './DayChallenge.module.scss';
import { answerSubmission } from '../../redux/workspaceSlice';

const DayChallenge = ({ children, day }) => {
    const [InputHeight, setInputHeight] = useState(undefined);
    const [WrongAnswer, setWrongAnswer] = useState(false);
    const answerRef = useRef(null);
    const challenges = useSelector(state => state.workspace.challenges)
    const dispatch = useDispatch();
    const answerSubmissionState = useSelector(state => state.workspace.answerSubmissionState);

    const SubmittingAnswerIndicator = (
        <div className={challengeStyle.submittingIndicatorContainer}>
            <FontAwesomeIcon className={challengeStyle.spinner} icon={faSpinner} />
            <div className={challengeStyle.indicatorText}>Submitting your answer</div>
        </div>
    )

    return (
        <section className={challengeStyle.sectionContainer}>
            <h1 className={challengeStyle.sectionTitle}>Workspace</h1>
            {children}
            <div className={challengeStyle.answer}>
                <Formik
                    className={challengeStyle.answerFormHolder}
                    initialValues={{
                        answer: '',
                    }}
                    onSubmit={(values, actions) => {
                        if (md5(values.answer) === challenges[(day-1)].solutionHash) {
                            dispatch(answerSubmission({
                                answerHash: md5(values.answer),
                                dayNumber: day
                            }));
                        } else {
                            setWrongAnswer(true);
                            actions.setFieldTouched('answer', false)
                        }
                        actions.setSubmitting(false);
                    }}
                    >
                        {({values, touched}) => (
                            <Form className={challengeStyle.answerForm}>
                                {
                                    answerSubmissionState === 'submitting'? SubmittingAnswerIndicator : null
                                }
                                <label htmlFor="answer" className={challengeStyle.answerLabel}>Your Answer</label>
                                <div className={challengeStyle.answerInputHolder}>
                                    {
                                        (!touched.answer && WrongAnswer)? (
                                            <div className={challengeStyle.wrongAnswerMessage}>Last answer you submitted was wrong</div>
                                        ) : null
                                    }
                                    <Field
                                        className={challengeStyle.answerInput}
                                        type="text"
                                        as="textarea" 
                                        name="answer"
                                        id="answer"
                                        onInput={(event) => {
                                            setWrongAnswer(false);
                                            setInputHeight(answerRef.current.clientHeight);
                                        }}
                                        style={{
                                            height: InputHeight,
                                        }}
                                        rows={1}
                                    />
                                    <div
                                        className={challengeStyle.answerInputHeightCalc}
                                        ref={answerRef}
                                    >{values.answer}&nbsp;</div>
                                    <button className={challengeStyle.answerSubmitButton} type="submit" >Submit</button>
                                </div>
                            </Form>
                        )}

                </Formik>
            </div>
        </section>
    );
}

export default DayChallenge;
