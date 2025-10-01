import React from 'react'
import img1 from '../shared folder/images/best.jpg'
import myimages from '../shared folder/constant/constantData'
const MyImagesComp = () => {
    
        let mycss1={
                height:"200px" ,
                width:"300px",
                
        }
        return (
        <div>
            <h2> This are all images</h2>
            <img src={img1} height="200px" width="300px"></img>
            <hr/>
            <img src={myimages.img8} style={mycss1} ></img><hr/>
            <img src={myimages.img3}style={mycss1}></img><hr/>
            <img src={myimages.img5}style={mycss1}></img><hr/>
            <img src={myimages.img7}style={mycss1}></img><hr/>
        </div>
    )
}

export default MyImagesComp
