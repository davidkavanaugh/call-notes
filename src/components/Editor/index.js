import React, { Component } from 'react';
import ContactPage from './ContactPage';
class Editor extends Component {
    render() { 
        return ( 
            <div className='editor'>
                <ContactPage />
            </div>
         );
    }
}
 
export default Editor;