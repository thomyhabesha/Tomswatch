
import React,{useRef} from 'react'
import './Aside.css'

export default function Aside(){
    const navRef=useRef();

    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav")
      }
    return(
        <div className='hmain'>
<div className='aside' ref={navRef}>
<div className='aside-top'>
    <p> {"<"} 15$</p>
    <p> {"<"} 25$</p>
    <p> {"<"} 35$</p>
    <p> {"<"} 50$</p>
</div>
<div className='loctaion'>
    <p>Location</p>
    <span className='laction-toggle'> <h1 className='toggle-change'> </h1></span>
    </div>
   
    <div className='bottom-aside'>
    <p>Priority</p>
    <p>High</p>
    <p>Medium</p>
    <p>Date</p>
    <p>Oct, 19 2023</p>
    </div>
    <div className='aside-bottom-line'></div>

    <button className='nav-btn nav-close-btn' onClick={showNavbar}> close</button>
</div>
<button className='nav-btn' onClick={showNavbar}>   Filter</button>
</div>
            
    )
}