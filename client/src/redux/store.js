import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk'

import {todosReducer} from './reducers/todosReducer'
import { tabReducer } from './reducers/tabReducer';

const reducer = combineReducers({
    todos:todosReducer,
    currentTab: tabReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store