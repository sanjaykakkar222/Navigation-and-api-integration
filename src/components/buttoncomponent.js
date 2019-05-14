import React from 'react';
class Buttoncomponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            //intilaizestate
        }
    }


    

    render() 
    {
        return (

            // <button onClick={this.props.btn_click} type={this.props.btn_type}>{this.props.btn_name}</button>

            <button class='btn btn-primary' onClick={this.props.buttonclick} type={this.props.buttontype}>{this.props.buttonname}</button>
 
        );
    }


}
export default Buttoncomponent;