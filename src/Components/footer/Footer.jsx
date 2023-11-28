import React from 'react'
import './Footer.css'
import Img1 from '../images/linkden-removebg-preview.png'
import Img2 from '../images/insta-removebg-preview.png'
import Img3 from '../images/facebook.png'
function Footer() {
  return (
    <div className='footer'>
<h1>Toms</h1>
<p> Toms Watch 2023</p>
<div className='footer-icons'>
<img src={Img1} alt=""/>
<img src={Img2} alt=""/>
<img src={Img3} alt=""/>
</div>
    </div>
  )
}

export default Footer