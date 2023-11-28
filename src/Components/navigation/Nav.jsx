import React,{useRef} from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'


function Nav() {
  const navRef=useRef();

  const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <div className="header">

    <h1><Link to="/">Tom's</Link></h1>

<div className="nav" ref={navRef}>
    <Link to="/Testimonials">Testimonials</Link>
    <Link to="/Buy">Explore</Link>
    <button className='nav-btn nav-close-btn' onClick={showNavbar}> close</button>
</div>
<button className='nav-btn' onClick={showNavbar}>   menu</button>
    </div>
  )
}

export default Nav