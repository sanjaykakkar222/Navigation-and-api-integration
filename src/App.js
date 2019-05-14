
import React, { Component } from 'react';
import {Router,Route} from 'react-router-dom'
// import Header from './components/header';
  import Datajob from './mockdata/jobs';
// import Content from './components/content';
// import Filter from './components/filter'
import {Home} from './redux/Containers/jobcontainer'
import {Usersignin,Usersignup} from './redux/Containers/usercontainer';

// import Usersignup from './components/Userssignup';
import Company from './company'
import {history} from './history'


class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      data:Datajob
    };
  }

  filteredData = (data) => {
    console.log(data);
    this.setState({
      data: data
    })
  }

  render(){
     return(
        <div>
        
           {/* <h1>Hello World</h1>
           <h2>Hello sanjay</h2>
           <h2>{4+5}</h2> */}
           {/* <Header/>
           <Filter  name={Datajob} filteredData={this.filteredData}/>
           <Content  name={this.state.data}/> */}

           <Router history={history}>

           <Route exact path='/' component={Home}/>
           <Route path='/signin' component={Usersignin}/>
           <Route path='/signup'  component={Usersignup}/>
           <Route path='/company' component={Company}/>
           
           
           </Router>
        </div>
     );
  }
}
export default App;