import * as actionType from '../actions/type'

export const todosReducer = (state = [], action) => {

    switch(action.type) {
        case actionType.ADDNEW_TODO:
            return [action.payload, ...state]
        case actionType.GETALL_TODO:
            return action.payload
        case actionType.TOGGLE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? {...todo, done: !todo.done}: todo
            ))
        case actionType.UPDATE_TODO:
            return state.map(todo => (
                todo._id === action.payload._id ? {...todo, data: action.payload.data}: todo
            ))
        case actionType.DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id)

        default:
        return state;
    }
}