import React from 'react';
import Inputcomponent from './inputcomponent';
import { Errfrm} from './formerrors.js';
import {useraction} from '../redux/User/useraction'
// import Buttoncomponent from './buttoncomponent';
import Header from './header';

class Usersignin extends React.Component {

    constructor(props) {

      super(props)

      this.state = {
        
        email: '',
        pwd: '',
        Signup_flag: false,
        SignIn: true,
        emailflag: false,
        pwdflag: false,
        formflag: false,
        userData: [],
        Errfrm: {
          email: '',
          pwd: ''
        }

      }

    }
   
    InputHandler = (e) => {
      //input handeler
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [e.target.name]: e.target.value
      }, () => {
        //callback
        this.Validator(name, value)
      });
    }
    //handling validation
    Validator(name, value) {
      let fieldValidationErrors = this.state.Errfrm;
      let emailflag = this.state.emailflag;
      // let phoneflag = this.state.phoneflag;
      // let nameflag = this.state.nameflag;
      let pwdflag = this.state.pwdflag;

      switch (name) {

        case 'email':
          emailflag = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          //
          fieldValidationErrors.email = emailflag ? '' : ' INVALID';
          break;
        case 'pwd':
         // pwdflag = value.length >= 8 && value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8}$/);
         pwdflag=true;
          fieldValidationErrors.pwd = pwdflag ? '' : 'ISWEAK';
          
        default:
          break;

      }
      this.setState({
          Errfrm: fieldValidationErrors,
          emailflag: emailflag,
          pwdflag: pwdflag,
          //   nameflag: nameflag,
          //   phoneflag: phoneflag
        },
        this.validateForm);
    }

    validateForm() {
      this.setState({
        formflag: this.state.emailflag && this.state.pwdflag
      });

    }
    

    // componentDidMount() {
    //   console.log('hii')
    //   axios.get('http://localhost:4200/api/users')
    //     .then((res) => {
    //      console.log(res);
    //       this.setState({
    //         userData: res.data
    //       });

    //     })
    // }

    onClickSignIn = (e) => {
      // console.log(this.state.userData)
      e.preventDefault();
     
      // this.state.userData.map((ele, ind) => {
      //   if (ele.user_email == this.state.email) {
      //     if (ele.user_pwd == this.state.pwd) {
      //       localStorage.setItem("currentUser", JSON.stringify(ele))
      //       return this.props.history.push('/')
            
      //     } else {

      //       return console.log("incorrect password")
      //     }

      //   }
      // })
      const {dispatch} = this.props
      const {email,pwd}=this.state
      dispatch(useraction.signin(email,pwd))


    }

  render() {
    return (
      <div>


        <Header/>
        
      <div class = "jumbotron">
        {/* <Buttoncomponent onbuttonclick={this.Signin} buttontype={'button'} buttonname={'login'}></Buttoncomponent> */}

        {/* <Buttoncomponent onbuttonclick={this.Signup} buttontype={'button'} buttonname={'signup'}></Buttoncomponent> */}
       
          {/* //conditional rendering
        //   this.state.SignIn &&  */}
              <div  class="container" >
             <form>
            <h1>Login</h1>
            <div>
              <Errfrm Errfrm={this.state.Errfrm} />
            </div>
            <label>user_email</label>
            <Inputcomponent inputtype={'email'} inputname={'email'} inputplaceholder={'enter email'} inputvalue={this.state.email} inputchange={this.InputHandler}></Inputcomponent>
            <label>user_pwd</label>
            <Inputcomponent inputtype={'password'} inputname={'pwd'} inputplaceholder={'enter password'} inputvalue={this.state.pwd} inputchange={this.InputHandler}></Inputcomponent><br></br>
            {/* <Buttoncomponent buttontype={'submit'} buttonname={'submit'}  buttonclick={'this.onClickSignIn'}></Buttoncomponent> */}
          <button onClick= {this.onClickSignIn}>submit</button>
          </form>
          </div>
          </div> 

        {/* {
          //conditionalrendering
          this.state.Signup_flag && <div>
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
          <Inputcomponent inputtype={'pwd'} inputname={'pwd'} inputplaceholder={'enterpassword'} inputvalue={this.state.pwd} inputchange={this.InputHandler}></Inputcomponent><br></br>
          <Buttoncomponent buttontype={'submit'} buttonname={'Submit'}></Buttoncomponent>
        </form>
        </div>
        } */}
      </div>

    )
  }
}

export default Usersignin;