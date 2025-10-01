import React from 'react'
import './external.css';
import mybox from './mycss.module.css';
const CssComp = () => {
    // internal css
    let mycss={
        color:"cyan",
        fontsize:"20px",
        textAlign:"center",
        backgroundColor:"green"
    }
    return (
        <div>
            {/* inline css */}
            <h3 style={{color:"red",backgroundColor:"lightgoldenrodyellow/"}}>Output</h3>
            <div style={mycss}>Use of internal css</div>
            <p className='txt-danger' >External css</p>
            <p className='txt-success' >External css</p>
            
            <div className={mybox.box}>box</div>
            
        </div>
    )
}

export default CssComp
