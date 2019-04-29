import React, { Component } from 'react';
import {Link} from'react-router-dom'
import './head.css';


export default class header extends Component {

    
  render() {
    return (
      <div>

<div class="header">
  <a href="#default" class="logo">JOBHUNTER</a>
  <div class="header-right">
    {/* <a class="active" href="#home">Home</a> */}

    <Link to='/'>HOME</Link>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <Link to ='/signin'>Sign In</Link>
    <Link to ='/signup'>Sign Up</Link>
    
    {/* <a href="#about">Signin</a>
    <a href="#about">Signout</a> */}
   

  </div>
</div>
        
      </div>
    )
  }
}
