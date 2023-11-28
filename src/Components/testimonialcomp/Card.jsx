import React from 'react'
import './Card.css'
import ReactPlayer from 'react-player'

function Card({items}) {
    const {vid,text}=items
  return (
    <li className='lists-texti'>
 <ReactPlayer url={vid} controls={true} height="70%" width="100%" />
 <p>{text}</p>
    </li>
  )
}

export default Card