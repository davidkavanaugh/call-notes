import React from 'react'
import { Field, reduxForm } from 'redux-form'

let QuestionForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="query">Question</label>
        <Field name="query" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="answers">Answers</label>
        <Field name="answers" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

QuestionForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(QuestionForm)

export default QuestionForm