import React from 'react'
import './Productcard.css'


function Productcard({items,handleclick}) {
const {id,img,name,price}=items
  return (
    <div className='prod-cards'>
        <img src={img} alt=""/>
        <h2>{name}</h2>
        <p>$ {price}</p>
        <button onClick={()=>handleclick(items)}>Add to cart</button>
    </div>
  )
}

export default Productcard