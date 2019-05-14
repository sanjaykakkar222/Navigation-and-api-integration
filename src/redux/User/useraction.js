import {userConstants} from './userconstant';
import {userservice} from './userservice';
import {history} from '../../history'


export const useraction ={


    signin,
    signup
}

function signin(email,pwd)
{

    return dispatch=>
    {
        dispatch(request({email}));
        userservice.signin(email,pwd)
        .then((user)=>
        {   
            if (user[0] === true) {
                dispatch(sucess(user))
                history.push('/')
            } else {
                dispatch(failure('Credential not valid'))
            }
        })
        .catch((error) => {
            dispatch(failure(error));
        })
    };




    function request(user){ return {type:userConstants.SIGN_IN_REQUEST,user}}
    function sucess(user){ return {type:userConstants.SIGN_IN_SUCESS,user}}
    function failure(error){ return {type:userConstants.SIGN_IN_FAILURE,error}}
    

}

function signup(user_type,name,email,mobile,pwd)
{

    return dispatch=>
    {
        dispatch(request({email}));
        userservice.signup(user_type,name,email,mobile,pwd)
        .then((user)=>
        {   
            if (user !== null) {
                dispatch(sucess(user))
                history.push('/signin')
            } else {
                dispatch(failure('Credential not valid'))
            }
        })
        .catch((error) => {
            dispatch(failure(error));
        })
    };

    


    function request(user){ return {type:userConstants.SIGN_UP_REQUEST,user}}
    function sucess(user){ return {type:userConstants.SIGN_UP_SUCESS,user}}
    function failure(error){ return {type:userConstants.SIGN_UP_FAILURE,error}}
    

}