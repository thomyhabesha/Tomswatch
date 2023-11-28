import React,{useEffect, useState} from 'react'
import Product from '../Components/product/Product'
import Nav from '../Components/product/Productnav'
import Footer from '../Components/footer/Footer'
import Cart from '../Components/cart/Cart'
import './buy.css'

function Buy() {
  const [show,setshow]=useState(true)
  const [cart,setcart]=useState([])

  
    const handleclick=(items)=>{
     
      if(cart.indexOf(items)!==-1)return;
      setcart([...cart,items])
      }


  const handlechange=(items,d)=>{
    const ind=cart.indexOf(items)
const arr=cart;
arr[ind].amount=d+1

if(arr[ind].amount===0)
  arr[ind].amount=1;
  setcart([...arr])
    } 



  return (
    <div>
      <React.Fragment>
        <Nav setshow={setshow} size={cart.length}/>
        {
          show?(<><Product handleclick={handleclick}/> <Footer/></> ) :(<Cart cart={cart} setcart={setcart} handlechange={handlechange}/>)
        }
        
        </React.Fragment>
    </div>
  )
}

export default Buy