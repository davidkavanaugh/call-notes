import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
class Question extends Component {
render() {
return (
    <div className="question">
      <label className="form-question">{this.props.question.query}</label>
      <div>
          <Field name={this.props.question.query} component="select">
            <option />
            {this.props.question.answer.split(',').map((answer) => (
              <option key={answer} value={answer}>{answer}</option>
            ))}
          </Field>
      </div>
  
  <Field name={this.props.question.query + ' (OTHER_ANSWER)'} placeholder='other...' component="textarea" />
</div>
);
}
}
export default connect()(Question);