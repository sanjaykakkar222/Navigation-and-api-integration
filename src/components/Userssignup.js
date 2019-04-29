import React from 'react';
import Inputcomponent from './inputcomponent';
import { Errfrm } from './formerrors.js';
import Buttoncomponent from './buttoncomponent';
import Header from './header';


class Userssignup extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      //initializing state
      // name: '',
      // email: '',
      // mobile: '',
      // pwd: '',
      // pwdflag: false,
      // nameflag: false,
      // emailflag: false,
      // SignIn: true,
      // Signup_flag: false,
      // phoneflag: false,
      // formflag: false,
      // Errfrm: { name: '', email: '',  mobile: '', email: '', pwd: '' }


      name: '',
      pwd: '',
      email: '',
      mobile: '',

      nameflag:false,
      pwdflag:false,
      emailflag:false,
      phoneflag:false,
      Signup_flag: true,
      SignIn: false,
      Errfrm: { name: '', email: '', pwd: '', mobile: '' }
      

    }

  }
  // Signin = () => {    
  //   this.setState({
  //     //setting up SigIn  state
  //     email: '',
  //     pwd: '',
  //     Signup_flag: false,
  //     SignIn: true,

  //     Errfrm: { email: '', pwd: '' }

  //   });
  // }
//   Signup = () => {
//     this.setState({
//  //setting up signup state
//       name: '',
//       pwd: '',
//       email: '',
//       mobile: '',
//       Signup_flag: true,
//       SignIn: false,
//       Errfrm: { name: '', email: '', pwd: '', mobile: '' }
//     })
//   }

  InputHandler = (e) => {
      //input handeler
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
      [e.target.name]: e.target.value
    },() =>{ 
      //callback
      this.Validator(name, value) 
    }
    );
  }
//handling validation
  Validator(name, value) 
  {
    let fieldValidationErrors = this.state.Errfrm;
    let emailflag = this.state.emailflag;
    let phoneflag = this.state.phoneflag;
    let nameflag = this.state.nameflag;
    let pwdflag = this.state.pwdflag;
    
    switch(name) {

      case 'email':
        emailflag = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        //
        fieldValidationErrors.email = emailflag ? '' : ' INVALID';
        break;
      case 'pwd':
        pwdflag = value.length >= 8 && value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8}$/);
        fieldValidationErrors.pwd = pwdflag ? '' : 'ISWEAK';
        break;
      case 'name':
        nameflag = value.match(/^[a-zA-Z]+$/);
        fieldValidationErrors.name = nameflag ? '':'ISTOOSHORT';
        break;
      case 'mobile':
        phoneflag = value.length === 10 && value.match(/^[0-9]+$/);;
        fieldValidationErrors.mobile = phoneflag ? '':'NOTVALID.';
        break;
      case 'email':
        emailflag = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailflag ? '' : ' ISNOTVALID';
        break;
      case 'pwd':
        pwdflag = (value.length) >= 8 && value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8}$/);
        fieldValidationErrors.pwd = pwdflag ? '' : 'ISWEAK';
        break;
      default:
      return '';

    }
    this.setState(
       {
      Errfrm: fieldValidationErrors,
      emailflag: emailflag,
      pwdflag: pwdflag,
      nameflag: nameflag,
      phoneflag: phoneflag
    },
     this.validateForm);
  }

  validateForm() {
    this.setState({ formflag: this.state.nameflag && this.state.phoneflag && this.state.emailflag && this.state.pwdflag });

  }
  render() {
    return (
      
      <div  >

      <Header/>
        {/* <Buttoncomponent onbuttonclick={this.Signin} buttontype={'button'} buttonname={'login'}></Buttoncomponent>

        <Buttoncomponent onbuttonclick={this.Signup} buttontype={'button'} buttonname={'signup'}></Buttoncomponent>
        {
          //conditional rendering
          this.state.SignIn && 
              <div>
             <form>
            <h1>Login</h1>
            <div>
              <Errfrm Errfrm={this.state.Errfrm} />
            </div>
            <label>user_email</label>
            <Inputcomponent inputtype={'email'} inputname={'email'} inputplaceholder={'enter email'} inputvalue={this.state.email} inputchange={this.InputHandler}></Inputcomponent>
            <label>user_pwd</label>
            <Inputcomponent inputtype={'pwd'} inputname={'pwd'} inputplaceholder={'enter password'} inputvalue={this.state.pwd} inputchange={this.InputHandler}></Inputcomponent><br></br>
            <Buttoncomponent buttontype={'submit'} buttonname={'submit'}></Buttoncomponent>
          </form>
          </div>
        } */}

        
         
          <div class = "jumbotron" >
            <form>
          <h1>Signup</h1>
          <div >
            <Errfrm Errfrm={this.state.Errfrm} />
          </div>
          <label>user_name</label>
          <Inputcomponent inputtype={'text'} inputname={'name'} inputplaceholder={'entername'} inputvalue={this.state.name} inputchange={this.InputHandler}></Inputcomponent>
          <label>user_email</label>
          <Inputcomponent inputtype={'email'} inputname={'email'} inputplaceholder={'enteremail'} inputvalue={this.state.email} inputchange={this.InputHandler}></Inputcomponent>
          <label>user_mobile</label>
          <Inputcomponent inputtype={'tel'} inputname={'mobile'} inputplaceholder={'entermobile'} inputvalue={this.state.mobile} inputchange={this.InputHandler}></Inputcomponent>
          <label>user_pwd</label>
          <Inputcomponent inputtype={'password'} inputname={'pwd'} inputplaceholder={'enterpassword'} inputvalue={this.state.pwd} inputchange={this.InputHandler}></Inputcomponent><br></br>
          <Buttoncomponent buttontype={'submit'} buttonname={'Submit'}></Buttoncomponent>
        </form>
        </div>
        
      </div>

    )
  }
}

export default Userssignup;