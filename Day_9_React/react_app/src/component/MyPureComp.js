import React, { Component, PureComponent } from 'react'

 class MyPureComp extends PureComponent {
    render() {
        console.log("Pure Component");
        
        return (
            <div>
                <h2>This is MyPureComp</h2>
                <p>This is {this.props.empname}</p>
            </div>
        )
    }
}

export default MyPureComp
