import React, { Component } from 'react'
// import Answer from './Answer';
// import Question from './Question';
import { connect } from 'react-redux';

class AllQuestions extends Component {   
    render() { 
        const handleClick = () => {
            console.log('Questions: ', this.props.questions );
        }
        // for (let [key, value] of Object.entries(questionsObject)) {
        //     console.log(`${key}: ${value}`);
        //   }
        return ( 
            <div>
                <button onClick={handleClick}>click me</button>
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    questions: state.questions.questions
});

export default connect(mapStateToProps)(AllQuestions);