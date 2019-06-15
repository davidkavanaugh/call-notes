import React, { Component } from 'react'
// import Answer from './Answer';
// import Question from './Question';
import { connect } from 'react-redux';

class AllQuestions extends Component {   
    render() { 
        
        for (let [key, value] of Object.entries(this.props.questions)) {
            console.log(`${key}:  `, value.questions);
          }

        return ( 
            <div>
                
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    questions: state.questions
});

export default connect(mapStateToProps)(AllQuestions);