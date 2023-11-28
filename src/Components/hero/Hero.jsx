import React from 'react'
import './Hero.css'
import HangingWatch from '../images/buywatch/hangingwatch1-removebg-preview.png'
import Bgwatch from '../images/bacground3.jpg'

export default function Hero(){
    return(
        <div className='hero'>
<div className='left-hero-watch'>
<img src={HangingWatch} alt=""/>
</div>

<div className="right-hero-watch" style={{background:`url(${Bgwatch})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
   <div className='righ-bg-text'>
    <h1>GEN <span>Z </span> CONNECTED WITH <span>MECHANICAL WATCHS</span> </h1>
    <p>Mechanical watchs have been around since the <span>1500</span>'s Automatic watchs on the other <span>Hand</span>
    weren't invented until the1700's. the impression interaction of sometimes over <span>100</span> miniaturaized idividual 
    pieces that hands in motion makes on analog mechanical
    </p>
    </div>

    
</div>
        </div>
    )
}