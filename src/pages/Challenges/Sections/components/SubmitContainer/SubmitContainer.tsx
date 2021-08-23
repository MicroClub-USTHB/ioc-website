import { Form, Formik } from 'formik';
import ErrorDisplay from '../../../../../common/Formik/ErrorDisplay/ErrorDisplay';
import * as yup from 'yup';
import FormControl from '../../../../../common/Formik/FormControl';

// styles
import submitStyle from './SubmitContainer.module.scss';

const SubmitContainer = (props: { dayNumber: string }) => {
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
    <div className={submitStyle.submit_container}>
      <div>
        <h1 className={submitStyle.title_container}>
          <span className={submitStyle.title_number}>{props.dayNumber}</span>
          <span className={submitStyle.title}>Submit An Answer</span>
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
                  <ul className={submitStyle.input_list}>
                    <li>
                      <FormControl
                        control="text"
                        name="answer"
                        field_className={submitStyle.field}
                        error_className={submitStyle.error}
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

export default SubmitContainer;