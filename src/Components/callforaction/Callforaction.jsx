import React from 'react'
import './Callforaction.css'
import Data from './Data'


export default function(){
    return(
        <div className="action">
            <h1>Our Partners</h1>
            <div className="partners">
{Data.map(each=>{
    return(
<img src={each.img} alt=""/>
)})}
            </div>
            <div className='action-contact'>

    <h1>We are <span>Delighted</span></h1>
    <p> I ran around asking my friends and family to ask me the time so that
         I could proudly look at my watch and tell them.Fashion industry has taken wristwatches
          from battlefields in the late 19th and early 20th century</p>
    <input type="email" placeholder='Email'/>
    <a href="#" >Contact Us</a>
            </div>
        </div>
    )
}