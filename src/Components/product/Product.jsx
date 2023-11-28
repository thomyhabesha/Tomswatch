import React,{useState} from 'react'
import Aside from './Aside'
import Data from './Data'
import Productcard from '../productcard/Productcard'
import './Product.css'

export default function Product({handleclick}){
    

 

    return(
   <div className="product">
    <Aside/>
    <div className='products-list'>
        
{
    Data.map(each=>{
        return(
           <Productcard key={each.img} items={each} handleclick={handleclick}/>
        )
    })
}
    </div>
   </div>

            
    )
}