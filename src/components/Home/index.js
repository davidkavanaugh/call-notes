import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux';

class Home extends Component {
    submit = values => {
        console.log(values);
      }
    render() { 
        return ( 
                <Form onSubmit={this.submit} questions={this.props.questions} />
         );
    }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}
 
export default connect(mapStateToProps)(Home);