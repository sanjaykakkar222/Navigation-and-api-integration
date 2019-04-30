import React, { Component } from 'react';
// import {BrowserRouter,Route} from 'react-router-dom'
import Header from './header';
  import Datajob from '../mockdata/jobs';
import Content from './content';
import Filter from './filter';
import axios from 'axios';

var currentUser={};
class Home extends Component{
    constructor(props) {
      super(props);
      this.state={
        data:Datajob,
        jobList:[]
      };
    }

    filteredData = (data) => {
        console.log(data);
        this.setState({
          data: data
        })
      }
      componentWillMount(){

        if(localStorage.getItem('currentUser')){

          currentUser=JSON.parse(localStorage.getItem('currentUser'));
          if(currentUser.role<2)
          {
            axios.get('http://localhost:4200/api/jobs'+currentUser.name)
         
          .then((res) => 
          {
             
              this.setState({ jobList: res.data }, () => {
                  console.log(res.data)
              });
      
          })
          }
          
          else{

            axios.get('http://localhost:4200/api/jobs')
       
          .then((res) => {
      
              this.setState({ jobList: res.data }, () => {
                
                  console.log(res.data)
              });
      
          })
         // }
        }
      
        }else{
          axios.get('http://localhost:4200/api/jobs')
       
          .then((res) => {
      
              this.setState({ jobList: res.data }, () => {
                  console.log(res.data)
              });
      
          })
        }
      }

      render(){
        return(
           <div>
{/* 
           <h1>Hello World</h1>
           <h2>Hello sanjay</h2>
           <h2>{4+5}</h2> */}
           <Header/>
           <Filter  name={Datajob} filteredData={this.filteredData}/>
           <Content  name={this.state.data}/>

   
              {/* <BrowserRouter>
   
              <Route exact path='/' component={Home}/>
              <Route path='/signin' component={SignIn}/>
              <Route path='/signup'  component={SignUp}/>
              
              </BrowserRouter> */}
           </div>
        );
     }
   }
   export default Home;