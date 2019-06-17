import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newQuery = this.getQuery.value;
  const newAnswer = this.getAnswer.value;
  const data = {
    newQuery,
    newAnswer
  }
  this.props.dispatch({ 
      type: 'UPDATE', id: this.props.question.id, 
      data: data 
    })
}
render() {
return (
<div key={this.props.question.id} className="question">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getQuery = input}
    defaultValue={this.props.question.query} placeholder="Ask a Question." /><br /><br />
    <textarea required rows="5" ref={(input) => this.getAnswer = input}
    defaultValue={this.props.question.answer} cols="28" placeholder="Separate Answers with Commas." /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);