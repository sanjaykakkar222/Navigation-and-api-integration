import React, { Component } from 'react';
import {Link} from'react-router-dom'
import './head.css';


export default class header extends Component {

    
  render() {
    if(localStorage.getItem("currentUser")){
      var  currentUser = JSON.parse(localStorage.getItem("currentUser"))
      // console.log(currentUser);
    }

    return (
      <div>

<div class="header">
 {/* <h1>HI {currentUser.first_name}</h1> */}

  <a href="#default" class="logo">JOBHUNTER</a>
  <div class="header-right">
  {
  localStorage.getItem('currentUser')?<Link to="/signin"> HI {currentUser.first_name} </Link>:""} 

{/*  
 <Link >{currentUser.first_name}</Link> */}

    <Link to='/'>HOME</Link>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <Link to ='/signin'>Sign In</Link>
    <Link to ='/signup'>Sign Up</Link>

   
  <Link to="/" ><span onClick = {()=>{localStorage.removeItem('currentUser') }}>Logout</span></Link>

    
    {/* <a href="#about">Signin</a>
    <a href="#about">Signout</a> */}
   

  </div>
 
</div>
        
      </div>
    )
  }
}
