import React from 'react'

const MyTask1=(props) =>{
    return (
        <div>
            <h2>Data from functional component</h2>
            <p>First name : {props.fname} <br></br>last name : {props.lname}<br></br> contact : {props.contact}<br></br> gender : {props.gender}<br></br> address : {props.address} </p>
        </div>
    )
}

export default MyTask1;

