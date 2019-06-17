import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Home from './components/Home';
import Editor from './components/Editor';

import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/editor'>Editor</Link>
            </div>
            
            <Route path='/' exact component={Home} />
            <Route path='/editor/' component={Editor} />
        </Router>
    </Provider>, document.getElementById('root'));