import React from "react";

class MyMethod extends React.Component{
    greeting =(s1,s2,s3)=>{
        window.alert(`hello ${s1},${s2},${s3}`);
    }
    render(){
        return <div>
            <h1>Hello</h1>
            <button type="button " onClick={()=>{this.greeting("om","sumit","amaan")}}>Call MyMethod</button>
        </div>
    }
}
export default MyMethod;