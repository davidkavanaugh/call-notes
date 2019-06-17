
import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
 const query = this.getQuery.value;
 const answer = this.getAnswer.value;
 const data = {
  id: new Date(),
  query,
  answer,
  editing: false
 }
 this.props.dispatch({
 type: 'ADD_QUESTION',
 data
 })
 this.getQuery.value = '';
 this.getAnswer.value = '';
}
render() {
return (
<div className="question-container">
  <h1 className="question_heading">Create Post</h1>
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" ref={(input) => this.getQuery = input}
   placeholder="Ask a Question." /><br /><br />
   <textarea required rows="5" ref={(input) => this.getAnswer = input}
   cols="28" placeholder="Separate Answers with Commas." /><br /><br />
   <button>Submit</button>
  </form>
</div>
);
}
}
export default connect()(QuestionForm);