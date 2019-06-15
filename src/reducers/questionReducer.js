export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_QUESTION':
            return state.concat({...state, questions: action.values});
        default:
            return state;
    }
}