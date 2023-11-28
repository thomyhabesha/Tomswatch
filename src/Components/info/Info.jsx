// -2 ፫-3 ፬-4 ፭-5 ፮-6 
import React from 'react'
import './Info.css'
import Img1 from '../images/2componentImg.png'

function Info() {
  return (
    <div className='info'>
<div className='info-left-img' >
    <img src={Img1} alt=""/>
</div>
<div className='year'>
  <h1>፲ ፱ ፺ ፯</h1>
  </div>
<div className='info-right-content'>
  
<div className='right-text'>
<h1>Look your finest</h1>
<p>I remember how excited I was when I received my first wristwatch on my 10th birthday.
   I was so proud, even though it was just a cheap childish watch. I ran around asking 
   my friends and family to ask me the time so that I could proudly look at my watch and tell them.  
   Nowadays, I guess kids hardly experience the same feeling since we are surrounded by digital devices.<br/><br/>
    Those modern devices especially smartphones can give you almost all sources of information including the time.
     However, here are five reasons why watches are still necessary and desirable.
Fashion industry has taken wristwatches from battlefields in the late 19th and early 20th century
 to become a modern fashion accessory New York Times.</p>
</div>
</div>
    </div>
  )
}

export default Info


