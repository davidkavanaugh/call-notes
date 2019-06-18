import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux';

class Home extends Component {
  selections =[];

  submit = values => {
    for (let [key, value] of Object.entries(values)) {
      this.selections.push(`${key}: ${value}`);
      console.log(this.selections);
      this.selections = [];
    }
    
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