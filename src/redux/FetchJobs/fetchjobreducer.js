import {jobConstants} from './fetchjobconstant'

export function fetchJob(state = {}, action) {
    switch (action.type) {
      case jobConstants.JOB_REQUEST:
        return {
  
        }
      case jobConstants.JOB_SUCCESS:
        return {
            jobs:action.jobs
  
          }
          case jobConstants.JOB_FAILURE:
            return {
             
            }
            default:
              return state;
    }
  }