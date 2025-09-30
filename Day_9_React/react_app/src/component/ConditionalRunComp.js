import React, { Component } from 'react'

export class ConditionalRunComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isCon:true
        }
    }
    
    render() {
            // 1. use of if else
            if(this.isCon){
                return <h2>Admin Login</h2>
            }
            else{
                return <h2>User Login</h2>
            }
        
    }
}

export default ConditionalRunComp


