import Usersignin from '../../components/Usersignin'
import Usersignup from '../../components/Userssignup'

import Home from '../../components/Home'

import {connect} from 'react-redux'

function mapStatetoProps(state)
{
    return{
   
    };
}
const coonectSignin = connect(mapStatetoProps)(Usersignin)
const coonectSignup = connect(mapStatetoProps)(Usersignup)
const coonectHome = connect(mapStatetoProps)(Home)
export {
    coonectSignin as Usersignin,
    coonectSignup as Usersignup,
    coonectHome as Home
}
