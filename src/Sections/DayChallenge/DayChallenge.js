import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';

// Style
import challengeStyle from './DayChallenge.module.scss';

const DayChallenge = ({ children }) => {
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
                    <Form className={challengeStyle.answerForm}>
                        <label htmlFor="answer" className={challengeStyle.answerLabel}>Your Answer</label>
                        <div className={challengeStyle.answerInputHolder}>
                            <Field
                                className={challengeStyle.answerInput}
                                type="text"
                                as="textarea" 
                                name="answer"
                                id="answer"
                                onInput={() => {
                                    console.log('input');
                                }}
                            />
                            <ErrorMessage name="answer" />
                            <button className={challengeStyle.answerSubmitButton} type="submit" >Submit</button>
                        </div>
                    </Form>

                </Formik>
            </div>
        </section>
    );
}

export default DayChallenge;
