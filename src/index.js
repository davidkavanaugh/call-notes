import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Home from './components/Home';
import Editor from './components/Editor';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Link to='/'>Home</Link>
            <Link to='/editor'>Editor</Link>

            <Route path='/' exact component={Home} />
            <Route path='/editor/' component={Editor} />
        </Router>
    </Provider>, document.getElementById('root'));