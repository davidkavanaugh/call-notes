import React, { Component } from 'react'

class Answer extends Component {
    render() { 
        return ( 
            <li>{this.props.answer}</li>
         );
    }
}
 
export default Answer;