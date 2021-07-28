import {createStore, applyMiddleware} from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import newsReducer from './Reducers/newsReducer';

// const Store = createStore(newsReducer, composeWithDevTools(applyMiddleware(thunk)) );
const Store = createStore(newsReducer,(applyMiddleware(thunk)))

export type RootStore = ReturnType<typeof newsReducer> 

export default Store