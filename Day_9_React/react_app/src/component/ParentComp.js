import React, { Component } from 'react'
import ChildCompo from './ChildCompo';
import MyReactMemoComp from './MyReactMemoComp';
class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myName:"OM"
        };
    }
    
    render() {
         console.log("Parent Component");
        return (
           
            
            <div>
                <h2>This is Parent Component</h2>
                <p>My Name is: {this.state.myName}</p>
                <button></button>
                <button type="button" onClick={()=>this.setState({myName:"Jadhav"})}>Change State Data</button>
                <ChildCompo city="Pune"></ChildCompo>
                <MyReactMemoComp myName={this.state.myName}/>
            </div>
        )
    }
}

export default ParentComp