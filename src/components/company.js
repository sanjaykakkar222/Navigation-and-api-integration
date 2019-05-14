// import React, { Component } from 'react'

// class company extends Component {


//     constructor(props)
//     {

//         super(props);

//         this.state={
//             Name:'',

//             job_type:'',
//             Position:'',
//             salary:''




//         }
//     }


//     InputHandler = (e) => {
//         //input handeler
//       const name = e.target.name;
//       const value = e.target.value;
//       this.setState(
//         {
//         [e.target.name]: e.target.value
//       },() =>{ 
//         //callback
//      //   this.Validator(name, value) 
//       }
//       );
//     }
//   render() {
//     return (

        
//       <div>
//           <label>Name</label>
//           <Inputcomponent inputtype={'text'} inputname={'name'} inputplaceholder={'enter name'} inputvalue={this.state.name} inputchange={this.InputHandler}></Inputcomponent>
//           <label>job_type</label>
//           <Inputcomponent inputtype={'text'} inputname={'jobtype'} inputplaceholder={'enterjobtype'} inputvalue={this.state.jobtype} inputchange={this.InputHandler}></Inputcomponent>
//            <label>Position</label>
          
//           <Inputcomponent inputtype={'text'} inputname={'position'} inputplaceholder={'enterposition'} inputvalue={this.state.position} inputchange={this.InputHandler}></Inputcomponent>


//             <label>salary</label>
//           <Inputcomponent inputtype={'Number'} inputname={'salary'} inputplaceholder={'entersalary'} inputvalue={this.state.salary} inputchange={this.InputHandler}></Inputcomponent>

//       </div>
//     )
//   }
// }
