import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import questionReducer from './questionReducer';

export default combineReducers({
    form: formReducer,
    questions: questionReducer
});