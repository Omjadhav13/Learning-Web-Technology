import React from 'react'
import { Component } from 'react'
const HocComp = (WrapperComp) => {
    
    class Hoc extends Component{
        constructor(props) {
        super(props);
    
        this.state = {
             count:0,
        };
    }
        increment =()=>{
            this.setState({count:this.state.count+1});
        }
        render(){
            return <WrapperComp count={this.state.count} increment={this.increment}></WrapperComp>
        }
    }

    return Hoc;
}

export default HocComp
