import React from 'react';
import Inputcomponent from './components/inputcomponent';
// import { Errfrm } from './formerrors.js';
import Buttoncomponent from './components/buttoncomponent';
import Header from './components/header';
import axios from 'axios';

var currentUser;
class Company extends React.Component {

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
      job_type: '',
      position: '',
    salary:'',
     location:'Gurgaon',
      // user_type:'',

    //   nameflag:false,
    //   pwdflag:false,
    //   emailflag:false,
    //   phoneflag:false,
    //   Signup_flag: true,
      // user_typeflag:false,
    // //   SignIn: false,
    //   Errfrm: { name: '', email: '', pwd: '', mobile: '' }
      

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
    //  this.Validator(name, value) 
    }
    );
  }
// //handling validation
//   Validator(name, value) 
//   {
//     let fieldValidationErrors = this.state.Errfrm;
//     let emailflag = this.state.emailflag;
//     let phoneflag = this.state.phoneflag;
//     let nameflag = this.state.nameflag;
//     let pwdflag = this.state.pwdflag;
//     let user_typeflag=this.state.user_typeflag;
    
//     switch(name) {

//       case 'email':
//         emailflag = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//         //
//         fieldValidationErrors.email = emailflag ? '' : ' INVALID';
//         break;
//       case 'pwd':
//         pwdflag = value.length >= 8 && value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8}$/);
//         fieldValidationErrors.pwd = pwdflag ? '' : 'ISWEAK';
//         break;
//       case 'name':
//         nameflag = value.match(/^[a-zA-Z]+$/);
//         fieldValidationErrors.name = nameflag ? '':'ISTOOSHORT';
//         break;
//       case 'mobile':
//         phoneflag = value.length === 10 && value.match(/^[0-9]+$/);;
//         fieldValidationErrors.mobile = phoneflag ? '':'NOTVALID.';
//         break;
//       case 'email':
//         emailflag = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//         fieldValidationErrors.email = emailflag ? '' : ' ISNOTVALID';
//         break;
//       case 'pwd':
//         pwdflag = (value.length) >= 8 && value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8}$/);
//         fieldValidationErrors.pwd = pwdflag ? '' : 'ISWEAK';
//         break;
//       default:
//       break;

//     }
//     this.setState(
//        {
//       Errfrm: fieldValidationErrors,
//       emailflag: emailflag,
//       pwdflag: pwdflag,
//       nameflag: nameflag,
//       phoneflag: phoneflag
//     },
//      this.validateForm);
//   }

//   validateForm() {
//     this.setState({ formflag: this.state.nameflag && this.state.phoneflag && this.state.emailflag && this.state.pwdflag });

//   }
componentWillMount(){
 currentUser= JSON.parse(localStorage.getItem('currentUser'))

}


  onClickSignUp=(e)=>{

    console.log(currentUser.user_name);
    e.preventDefault();
    axios.post('http://localhost:4200/api/job/' + currentUser.user_name ,{
      name: this.state.name,
      // user_id: this.state.password,
      job_type: this.state.job_type,
      salary: this.state.salary,
      position:this.state.position,
      

      // user_type:this.state.user_type
      
      
    })
    .then((res)=>{
      console.log(res);
      return this.props.history.push('/');
    }

    )
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

        
         
          <div class ="jumbotron" >
            <form>
          
          {/* <div >
            <Errfrm Errfrm={this.state.Errfrm} />
          </div> */}
          <label>name</label>
          <Inputcomponent inputtype={'text'} inputname={'name'} inputplaceholder={'entername'} inputvalue={this.state.name} inputchange={this.InputHandler}></Inputcomponent>
          <label>job_type</label>
          <Inputcomponent inputtype={'text'} inputname={'job_type'} inputplaceholder={'enteremail'} inputvalue={this.state.job_type} inputchange={this.InputHandler}></Inputcomponent>
          <label>position</label>
          <Inputcomponent inputtype={'text'} inputname={'position'} inputplaceholder={'entermobile'} inputvalue={this.state.position} inputchange={this.InputHandler}></Inputcomponent>
          <label>salary</label>
          <Inputcomponent inputtype={'text'} inputname={'salary'} inputplaceholder={'enterusertype'} inputvalue={this.state.salary} inputchange={this.InputHandler}></Inputcomponent>

          {/* <label>location</label>
          <Inputcomponent inputtype={'text'} inputname={'pwd'} inputplaceholder={'enterpassword'} inputvalue={this.state.pwd} inputchange={this.InputHandler}></Inputcomponent><br></br> */}
          <Buttoncomponent buttontype={'submit'} buttonname={'Submit'}  buttonclick={this.onClickSignUp}></Buttoncomponent>
        </form>
        </div>
        
      </div>

    )
  }
}

export default Company;