import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useRef, useState } from 'react';

// Style
import challengeStyle from './DayChallenge.module.scss';

const DayChallenge = ({ children }) => {
    const [AnswerInput, setAnswerInput] = useState('');
    const [InputHeight, setInputHeight] = useState(undefined);
    const answerRef = useRef(null);
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
                        alert(JSON.stringify(values))
                        actions.setSubmitting(false);
                    }}
                    >
                        {({values}) => (
                            <Form className={challengeStyle.answerForm}>
                                <label htmlFor="answer" className={challengeStyle.answerLabel}>Your Answer</label>
                                <div className={challengeStyle.answerInputHolder}>
                                    <Field
                                        className={challengeStyle.answerInput}
                                        type="text"
                                        as="textarea" 
                                        name="answer"
                                        id="answer"
                                        onInput={(event) => {
        
                                            setAnswerInput(event.target.value);
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
                                    <ErrorMessage name="answer" />
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
