import React, { Component } from 'react';
// import axios from 'axios';

// import Datajob from '../mockdata/jobs';


export default class content extends Component {


    constructor(props)
    {


        super(props);

        this.state={

          list:[]
        }

    }


  render() {
    return (
        <div>
           
{this.props.name.map((postdetail,index)=>
{
    return(
    <div>

<div class="card w-75">
<div class="card-body">
        <p><b>JOB ID</b>:{postdetail.job_id}</p>
        <p><b>COMPANY</b>:{postdetail.name}</p>
        <p><b>SALARY</b>:{postdetail.salary}</p>
        <p><b>DESIGNATION</b>:{postdetail.position}</p>
        <p><b>LOCATION</b>:{'Gurgaon'}</p>
        <button class='btn btn-success'>ApplyJob</button>
        </div>
        

        </div>
        
         </div>
    )
})}
            </div>



        
      
    );
  }
}
