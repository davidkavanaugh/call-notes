import React from 'react'
import QuestionForm from './QuestionForm'
import AllQuestions from './AllQuestions'
import { connect } from 'react-redux';

class Editor extends React.Component {
  
  submit = values => {
    this.props.dispatch({
      type: 'ADD_QUESTION',
      values
    });
  }

  render() {
    return (
      <div>
        <QuestionForm onSubmit={this.submit} />
        <AllQuestions />
      </div>
    );
  }
}

const mapStateToProps =(state) => {
  return {
      questions: state.questions
  }
}

export default connect(mapStateToProps)(Editor)