import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
export class ClickCounterComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             mcount:0
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1});
    }
    Mouseincrement=()=>{
        this.setState({mcount:this.state.mcount+1});
    }
    render() {
        return (
            <div>
                <h1>This is Counter</h1>
                <h3>Counter : {this.state.count} </h3>
                <button className='btn btn-primary' type='button' onClick={()=>this.increment()}>Counter</button>
                <h1>This is Hover Counter</h1>
                <h3>Counter : {this.state.mcount} </h3>
                <button className='btn btn-warning' type='button' onMouseOver={()=>this.Mouseincrement()}>Counter</button>
            </div>
        )
    }
}

export default ClickCounterComp
