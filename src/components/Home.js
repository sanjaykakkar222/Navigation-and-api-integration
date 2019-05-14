import React, { Component } from 'react';
// import {BrowserRouter,Route} from 'react-router-dom'
import Header from './header';
  import Datajob from '../mockdata/jobs';
import Content from './content';
import Filter from './filter';
import {fetchjobaction} from '../redux/FetchJobs/fetchjobsaction'
import axios from 'axios';

var currentUser={};
class Home extends Component{
  isLoggedIn = !!JSON.parse(localStorage.getItem('currentUser'));
    constructor(props) {
      super(props);
      this.state={
        roleBasedJobs: [],
        jobList:[],
        user: JSON.parse(localStorage.getItem('currentUser')),
        filterJob: []
      };
    }

    

    filterData = (data) => {
      try {
        if (this.state.user.user_type === 2) {
          this.setState({
            roleBasedJobs: data
          })
        }
      } catch (error) {
        console.log(error.message)
      }
        console.log(data);
        this.setState({
          jobList: data
        })
      }

      componentDidMount()
      {

        const {dispatch}=this.props

        dispatch(fetchjobaction.fetchJob())
      }

      componentWillReceiveProps(nextProps)
      {
        const {jobs}=nextProps
        try {
          const companyJobs = jobs.filter((item)=>{
            if(item.name === this.state.user.user_name){
              return true
            }
            return false;
          })
          console.log(companyJobs)
          this.setState({
            roleBasedJobs:companyJobs,
            roleBasedFilter: companyJobs
          })
        } catch (error) {
          console.log(error.message)
        }
        this.setState({
          jobList: jobs,
          filterJob: jobs
        })
      }

      render(){
        const {jobs} = this.props
        return(
           <div>
           <Header/>
           {
             !this.isLoggedIn && <Filter data={this.state.filterJob} filteredData={this.filterData}/>
           }
           {
             this.isLoggedIn && this.state.user.user_type === 2 && <Filter data={this.state.roleBasedFilter} filteredData={this.filterData}/>
           }
           {
             this.isLoggedIn && this.state.user.user_type === 1 && <Filter data={this.state.filterJob} filteredData={this.filterData}/>
           }
           {
             jobs && !this.isLoggedIn && <Content  name={this.state.jobList}/>
           }
           {
             jobs && this.isLoggedIn && this.state.user.user_type === 2 && <Content  name={this.state.roleBasedJobs}/>
           }
           {
             jobs && this.isLoggedIn && this.state.user.user_type === 1 && <Content  name={this.state.jobList}/>
           }
           </div>
        );
     }
   }
   export default Home;