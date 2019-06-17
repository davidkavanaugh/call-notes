
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
render() {
return (
<div className="question">
  <h2 className="question_query">{this.props.question.query}</h2>
  <p className="question_answer">{this.props.question.answer}</p>
  <div className="control-buttons">
    <button className="edit"
    onClick={() => this.props.dispatch({ 
        type: 'EDIT_QUESTION', 
        id: this.props.question.id })
    }
    >Edit</button>
    <button className="delete"
    onClick={() => this.props.dispatch({ 
        type: 'DELETE_QUESTION', 
        id: this.props.question.id })}
    >Delete</button>
  </div>
</div>
);
}
}
export default connect()(Question);