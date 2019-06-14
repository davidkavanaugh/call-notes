import React from 'react'
import QuestionForm from './QuestionForm'

class Questions extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <QuestionForm onSubmit={this.submit} />
  }
}

export default Questions