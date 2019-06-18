import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux';

class Home extends Component {
    selections = [];

    submit = values => {

      for (let [key, value] of Object.entries(values)) {
        this.selections.push(key + ': ' + value)
      }
      let toCopy = this.selections.join('\n').toString();

      // Create a dummy input to copy the string array inside it
      let copyBox = document.createElement("textarea");

      // Add it to the document
      document.body.appendChild(copyBox);

      // Set its ID
      copyBox.setAttribute("id", "copy-selections");
      
      // Output the array into it
      document.getElementById("copy-selections").value=toCopy;

      // Select it
      copyBox.select();

      // Copy its contents
      document.execCommand("copy");

      // Remove it as its not needed anymore
      document.body.removeChild(copyBox);

      this.selections = [];
    };

    handleChange(e) {
      e.preventDefault();
    };

    render() { 
        return ( 
            <div>
                <Form 
                  onSubmit={this.submit} 
                  questions={this.props.questions} 
                />
            </div>
         );
    }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}
 
export default connect(mapStateToProps)(Home);