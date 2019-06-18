
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
render() {
return (
<div className="question">
  <h3 className="question_query">{this.props.question.query}</h3>
  <ul className='answerList'>
    {this.props.question.answer.split(',').map((answer) => (
      <li className='answerListItem' key={answer}>{answer}</li>
    ))}
  </ul>
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