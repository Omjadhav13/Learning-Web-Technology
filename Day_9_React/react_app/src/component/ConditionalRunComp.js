import React, { Component } from 'react'

export class ConditionalRunComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isCon:true
        }
    }
    
    render() {
        // let msg="";    
        // // 1. use of if else
        // if(this.state.isCon){
        //     msg ="Admin login"
        // }
        // else{
        //     msg= "User Login"
        //    }

        // //2. use of element as variable
        // return <h2>{msg}</h2>

        //3. use of ternary operator
        // return (this.state.isCon)?<h2>Admin Login</h2>:<h2>User login</h2>

        // 4. use of short circuit
        return this.state.isCon && <h2>Admin Login</h2>
        
    }
}

export default ConditionalRunComp


