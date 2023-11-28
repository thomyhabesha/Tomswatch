import React from 'react'
import {Link} from 'react-router-dom'
import './Productnav.css'

export default function Productnav({setshow,size}){
    return(
   <div className="productnav">

    <h1 onClick={()=>setshow(true)}>Shoping</h1>
    <div className="homenav">
        <Link to="/" >Home</Link>
        </div>
    <div className="shping-icon">
        <p onClick={()=>setshow(false)} style={{fontSize:"1.3rem"}}>Cart</p>
        <p>{size}</p>
    </div>
   </div>

            
    )
}