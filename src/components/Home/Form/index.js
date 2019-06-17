import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Question from './Question';

const Form = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
    <div>
        {props.questions.map((question) => (
            <div key={question.id}>
                {
                    <Question question={question} key={question.id} />
                }
            </div>
        ))}
      </div>

      <div>
        <label className="additional_notes">Additional Notes</label>
        <div>
          <Field name="additionalNotes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(Form);