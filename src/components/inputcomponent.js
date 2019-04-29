import React from 'react';
class inputcomponent extends React.Component {
// var styles={color:'red'};

  constructor(props) {
   var styles={color:'red'};
    super(props)

    this.state = {
      //intializestate

    }

  }
  render() {
    return (
    <div class="form-group" >
    
      <input class="form-control"  type={this.props.inputtype} name={this.props.inputname} value={this.props.inputvalue} placeholder={this.props.inputplaceholder} onChange={this.props.inputchange}></input>
    </div>
    );
  }

}
export default inputcomponent;