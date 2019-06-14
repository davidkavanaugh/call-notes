export default (state = {questions:[], answers: []}, action) => {
    switch(action.type) {
        case 'ADD_QUESTION':
            return {...state, questions: action.values};
        default:
            return state;
    }
}