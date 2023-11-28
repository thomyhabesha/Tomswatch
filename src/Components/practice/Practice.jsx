import React,{useRef} from 'react'
import Img1 from '../images/bacground3.jpg'
import './Practice.css'
const Practice =()=>{
const usingRef=useRef("hellp");

function chang(){
    console.log(usingRef.current)
    
}
 return(
<div className="class">
    <div>
        <img src={Img1} alt=""/>
        <h1 className='H1' >name </h1>
        <button onClick={chang}> button</button>
    </div>

    </div>
    )
}

export default Practice; 