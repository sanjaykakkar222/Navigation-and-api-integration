
import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
// import Header from './components/header';
  import Datajob from './mockdata/jobs';
// import Content from './components/content';
// import Filter from './components/filter'
import Home from './components/Home';
import Usersignin from './components/Usersignin';
import Usersignup from './components/Userssignup';


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

           <BrowserRouter>

           <Route exact path='/' component={Home}/>
           <Route path='/signin' component={Usersignin}/>
           <Route path='/signup'  component={Usersignup}/>
           
           
           </BrowserRouter>
        </div>
     );
  }
}
export default App;