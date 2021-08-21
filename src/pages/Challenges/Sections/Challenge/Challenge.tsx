import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import FormControl from '../../../../common/Formik/FormControl';
import ErrorDisplay from '../../../../common/Formik/ErrorDisplay/ErrorDisplay';
import { UilClipboardNotes } from '@iconscout/react-unicons'

// styles
import challengeStyle from './Challenge.module.scss';

const StoryContainer = () => {
  return (
    <div className={challengeStyle.story_container_outer}>
      <div className={challengeStyle.story_container_inner}>
        <h1 className={challengeStyle.title_container}>
          <span className={challengeStyle.title_number}>1</span>
          <span className={challengeStyle.title}>This is marcos marlos</span>
        </h1>
        <div className={challengeStyle.story}>
          <p>
            Axios Woke up and as his usual opened his windows to feel the fresh air and warm sunlight, the sky was as bright as ever, but something was wrong... weirdly there was no car sounds no people walking or talking, an empty calm static city only few animals were roaming around which as our little Axios were wondering what possibly could have happened.<br /><br />
            “Okay… that's weird! Either I'm still dreaming or everyone agreed to prank me” he thought.<br /><br />
            He takes his phone, but the battery ran out which made him a bit intrigued since he was sure he put it to charge. He tries to turn on his computer and light switches but nothing, there was no electricity at all.<br /><br />
            “Alright it's getting even weirder and scary now i should go check outside”<br /><br />
            As he opens his door a piece of paper falls he opens it to read :<br /><br />
            “Wonder never knows, some changes hit the city, and it seems like you're the only one who's still here and is still human… So if you want to survive, follow my instructions without questions and you'll learn more about what happened when the time comes. For now you're gonna need some supplies that you will find in this building. This is a following list of numbers that represent the rooms that are not safe use it wisely to explore the building”<br /><br />
            M.IoC<br /><br />
          </p>
        </div>
      </div>
    </div>
  )
}

const SubmitContainer = () => {
  const form_values = {
    answer: ''
  }
  const form_schema = new yup.ObjectSchema({
    answer: yup.string().required('You cannot submit an empty answer'),
  })
  const handleSubmit = (values: any) => {
    // TODO: Create an rtkq endpoint and use it here
  }
  return (
    <div className={challengeStyle.submit_container}>
      <div>
        <h1 className={challengeStyle.title_container}>
          <span className={challengeStyle.title_number}>1</span>
          <span className={challengeStyle.title}>Submit An Answer</span>
        </h1>
        <Formik
          initialValues={form_values}
          validationSchema={form_schema}
          onSubmit={handleSubmit}
        >
          {
            (props) => {
              return (
                <Form>
                  <ul className={challengeStyle.input_list}>
                    <li>
                      <FormControl
                        control="text"
                        name="answer"
                        field_className={challengeStyle.field}
                        error_className={challengeStyle.error}
                        ErrorComponent={ErrorDisplay}
                      />
                    </li>
                    <li>
                      <button>Submit</button>
                    </li>
                  </ul>
                </Form>
              )
            }
          }
        </Formik>
      </div>
    </div>
  )
}

const ChallengeContainer = () => {
  return (
    <div className={challengeStyle.challenge_container_outer}>
      <div className={challengeStyle.challenge_container_inner}>
        <h1 className={challengeStyle.title_container}>
          <span className={`${challengeStyle.title_number} ${challengeStyle.title_icon}`}><UilClipboardNotes /></span>
          <span className={challengeStyle.title}>Task</span>
        </h1>
        <div className={challengeStyle.task}>
          <p>
            Axios Woke up and as his usual opened his windows to feel the fresh air and warm sunlight, the sky was as bright as ever, but something was wrong... weirdly there was no car sounds no people walking or talking, an empty calm static city only few animals were roaming around which as our little Axios were wondering what possibly could have happened.<br /><br />
            “Okay… that's weird! Either I'm still dreaming or everyone agreed to prank me” he thought.<br /><br />
            He takes his phone, but the battery ran out which made him a bit intrigued since he was sure he put it to charge. He tries to turn on his computer and light switches but nothing, there was no electricity at all.<br /><br />
            “Alright it's getting even weirder and scary now i should go check outside”<br /><br />
            As he opens his door a piece of paper falls he opens it to read :<br /><br />
            “Wonder never knows, some changes hit the city, and it seems like you're the only one who's still here and is still human… So if you want to survive, follow my instructions without questions and you'll learn more about what happened when the time comes. For now you're gonna need some supplies that you will find in this building. This is a following list of numbers that represent the rooms that are not safe use it wisely to explore the building”<br /><br />
            M.IoC
            Axios Woke up and as his usual opened his windows to feel the fresh air and warm sunlight, the sky was as bright as ever, but something was wrong... weirdly there was no car sounds no people walking or talking, an empty calm static city only few animals were roaming around which as our little Axios were wondering what possibly could have happened.<br /><br />
            “Okay… that's weird! Either I'm still dreaming or everyone agreed to prank me” he thought.<br /><br />
            He takes his phone, but the battery ran out which made him a bit intrigued since he was sure he put it to charge. He tries to turn on his computer and light switches but nothing, there was no electricity at all.<br /><br />
            “Alright it's getting even weirder and scary now i should go check outside”<br /><br />
            As he opens his door a piece of paper falls he opens it to read :<br /><br />
            “Wonder never knows, some changes hit the city, and it seems like you're the only one who's still here and is still human… So if you want to survive, follow my instructions without questions and you'll learn more about what happened when the time comes. For now you're gonna need some supplies that you will find in this building. This is a following list of numbers that represent the rooms that are not safe use it wisely to explore the building”<br /><br />
            M.IoC
            <br /><br /><br /><br />
          </p>
        </div>
      </div>
    </div>
  )
}

const Challenge = () => {
  return (
    <section className={challengeStyle.container}>
      <div className={challengeStyle.left_container}>
        <StoryContainer />
        <SubmitContainer />
      </div>
      <ChallengeContainer />
    </section>
  );
}

export default Challenge;
