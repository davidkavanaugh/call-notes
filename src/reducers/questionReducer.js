const questionReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_QUESTION':
    return state.concat([action.data])
    case 'DELETE_QUESTION':
    return state.filter((question) => question.id !== action.id)
    case 'EDIT_QUESTION':
    return state.map((question) => question.id === action.id ? { ...question, editing: !question.editing } : question)
    case 'UPDATE':
    return state.map((question) => {
    if (question.id === action.id) {
    return {
    ...question,
    query: action.data.newQuery,
    answer: action.data.newAnswer,
    editing: !question.editing
    }
    } else return question;
    })
    default:
    return state;
    }
    }
    export default questionReducer;