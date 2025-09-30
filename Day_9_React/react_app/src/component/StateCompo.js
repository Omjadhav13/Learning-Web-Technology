import { Component } from "react";

class StateCompo extends Component{
    constructor(){
        super();
        this.state={
            empName:"om",
            empsal:40000,
        };
        
    };
    changeState=()=>{
            this.setState({empName:"om",empsal:this.state.empsal+10000});
        };
    render(){
        const{empName,empsal}=this.state;
        return (
            <div>
                <h2>This Example of state </h2>
                <p>
                    Name:{empName} and salary:{empsal}
                </p>
                <button type="button" onClick={()=>this.changeState()}>Change State Data</button>
            </div>
        )
    };
};
export default StateCompo;