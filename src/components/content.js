import React, { Component } from 'react';

// import Datajob from '../mockdata/jobs';


export default class content extends Component {


    constructor(props)
    {


        super(props);

    }
  render() {
    return (
        <div>
        {/* <h1>{this.props.name}</h1>  */}         
{this.props.name.map((postdetail,index)=>
{
    return(
    <div>

<div class="card w-75">
<div class="card-body">
        <p><b>JOB ID</b>:{postdetail.job_id}</p>
        <p><b>COMPANY</b>:{postdetail.company_name}</p>
        <p><b>SALARY</b>:{postdetail.salary}</p>
        <p><b>DESIGNATION</b>:{postdetail.designation}</p>
        <p><b>LOCATION</b>:{postdetail.location}</p>
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
