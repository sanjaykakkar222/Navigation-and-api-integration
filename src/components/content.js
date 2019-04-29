import React, { Component } from 'react';

import Datajob from '../mockdata/jobs';


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
        <p>{postdetail.job_id}</p>
        <p>{postdetail.company_name}</p>
        <p>{postdetail.salary}</p>
        <p>{postdetail.designation}</p>
        <p>{postdetail.location}</p>
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
