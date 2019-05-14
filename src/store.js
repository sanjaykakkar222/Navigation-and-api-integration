import {createStore,applyMiddleware}  from 'redux';
import thunkMiddeleware from 'redux-thunk';
import {createLogger} from 'redux-logger'
import rootReducer from '../src/redux/rootreducer';
const loggerMiddleware=createLogger();


export const store=createStore(

    rootReducer,
    applyMiddleware(
        thunkMiddeleware,
        loggerMiddleware
    )
);