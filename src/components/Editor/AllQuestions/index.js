import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import EditComponent from '../EditComponent';

class AllQuestions extends Component {
render() {
return (
<div>
  <h1 className="question_heading">All Questions</h1>
  {this.props.questions.map((question) => (
        <div key={question.id}>
            {question.editing ? 
                <EditComponent question={question} key={question.id} /> : 
                <Question question={question} key={question.id} />
            }
        </div>
    ))}
</div>
);
}
}

const mapStateToProps = (state) => {
return {
    questions: state.questions
}
}
export default connect(mapStateToProps)(AllQuestions);