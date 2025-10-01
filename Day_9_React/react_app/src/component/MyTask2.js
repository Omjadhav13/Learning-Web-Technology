import React, { Component } from 'react'

class MyTask2 extends Component {
  
    render() {
        return (
            <div>
                <h2>Data from Class Component</h2>
                 <p>First name : {this.props.fname} <br></br>last name : {this.props.lname}<br></br> contact : {this.props.contact}<br></br> gender : {this.props.gender}<br></br> address : {this.props.address} </p>
            </div>
        )
    }
}

export default MyTask2
