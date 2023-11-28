import React from 'react'
import {useState} from 'react'
import './Testimonials.css'
import ReactPlayer from 'react-player'
import Data from '../../Data'
function Testimonials() {
    const [testimodata, setdata]=useState(Data)
    const data1=testimodata.map(items=>{
        return(
<li>
    <ReactPlayer url={items.vid} controls={true} height="70%" width="100%" />
    <p>{items.text}</p>
    </li>
        )
    })
  return (
    <div className='testimonial'>
        <h1>Testimonials</h1>

<ul>
    {data1}
</ul>
<a className='btn' href="./Testimonials">See More</a>

    </div>
  )
}

export default Testimonials