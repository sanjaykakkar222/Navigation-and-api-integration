

import Home from '../../components/Home'

import {connect} from 'react-redux'

function mapStatetoProps(state)
{

    const {jobs} = state.fetchJob
    return{
   jobs
    };
}

const coonectHome = connect(mapStatetoProps)(Home)
export {
   
    coonectHome as Home
}
