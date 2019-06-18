import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
class Question extends Component {
render() {
return (
    <div className="home_question">
      <label className="form-question">{this.props.question.query}</label>
      <div className="home_answer">
          <Field name={this.props.question.query} component="select">
            <option />
            {this.props.question.answer.split(',').map((answer) => (
              <option className="question_answer" key={answer} value={answer}>{answer}</option>
            ))}
          </Field>
      </div>
      <div className="home_question_textbox">
        <Field name={this.props.question.query + ' (OTHER_ANSWER)'} placeholder='other...' component="textarea" />
      </div>
</div>
);
}
}
export default connect()(Question);