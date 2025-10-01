import React, { Component } from 'react'

 class Mytask3 extends Component {
    constructor(){
        super();
        this.state={
            propCounter:0
        };
    };
    IncCounter=()=>{
        this.setState({propCounter:this.state.propCounter+1})
    }
    DecCounter=()=>{
        this.setState({propCounter:this.state.propCounter-1})
    }
    RecCounter=()=>{
        this.setState({propCounter:0})
    }
    render() {
        //destructuring 
        // const{propCounter}=this.state;//    its object
        return (
            <div>
                <h2>Count {this.state.propCounter}</h2>
                <button type='button' onClick={this.IncCounter}>Increment</button>&nbsp;
                <button type='button' onClick={this.DecCounter}>Decrement</button>&nbsp;
                <button type='button' onClick={this.RecCounter}>Reset</button>
            </div>
        )
    }
}

export default Mytask3
