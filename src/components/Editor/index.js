import React, { Component } from 'react';
import Questions from './Questions';

class Editor extends Component {
    render() { 
        return ( 
            <div className='editor'>
                <Questions />

            </div>
         );
    }
}
 
export default Editor;