
import {jobConstants} from './fetchjobconstant';
import {fetchjobservice} from './fetchjobservice';
import {history} from '../../history'


export const fetchjobaction={
    fetchJob
}

function fetchJob()
{

    return dispatch => {
        dispatch(request());
        fetchjobservice.fetchJob()
        .then((jobs)=>
        {   
            dispatch(success(jobs))
            
        })
        .catch((error) => {
            dispatch(failure(error));
        })
    };

    function request(){ return {type:jobConstants.JOB_REQUEST}}
    function success(jobs){ return {type:jobConstants.JOB_SUCCESS,jobs}}
    function failure(error){ return {type:jobConstants.JOB_FAILURE,error}}
      
}