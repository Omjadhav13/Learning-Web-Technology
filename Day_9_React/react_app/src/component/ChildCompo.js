import React, { Component, PureComponent } from 'react'

class ChildCompo extends PureComponent {
    render() {
        console.log("Child Component");
        
        return (
            <div>
                <h3>This is Child Component</h3>
                <p>City: {this.props.city}</p>
                <hr>
                </hr>
                
            </div>
        )
    }
}

export default ChildCompo