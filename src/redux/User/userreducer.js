import {
  userConstants
} from '../User/userconstant';

export function authenticate(state = {}, action) {
  switch (action.type) {
    case userConstants.SIGN_IN_REQUEST:
      return {
        loggingin: true,

      }
    case userConstants.SIGN_IN_FAILURE:
      return {

        }

        case userConstants.SIGN_IN_SUCESS:


          return {
            loggedin: true
          }



          default:
            return state;
  }
}

export function signup(state = {}, action) {
  switch (action.type) {
    case userConstants.SIGN_UP_REQUEST:
      return {

      }
    case userConstants.SIGN_UP_FAILURE:
      return {

        }

        case userConstants.SIGN_UP_SUCESS:


          return {
            signup: true
          }
          default:
            return state;
  }
}