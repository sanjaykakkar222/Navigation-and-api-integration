import {authenticate, signup} from '../redux/User/userreducer'

import {fetchJob} from '../redux/FetchJobs/fetchjobreducer'

import {combineReducers} from 'redux'
const rootReducer=combineReducers(
    {

        authenticate,
        signup,
        fetchJob

    }
)

export default rootReducer;

