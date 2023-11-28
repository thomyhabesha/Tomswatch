import React, { useState ,useEffect} from 'react'
import './Cart.css'

function Cart({cart,setcart,handlechange}) {

    const [price,setprice]=useState(0)

    const handleremove=(id)=>{
        const arr=cart.filter((items)=>items.id!==id);
        setcart(arr)
        handleprice();
    }
    const handleprice=()=>{
let ans=0;
cart.map((items)=>(ans +=items.amount * items.price))
setprice(ans);
    }

    useEffect(()=>{
     handleprice();   
    })

  return (
  <div className='cart-list'>
  {cart.map((items) =>(
    <div className='cart-box' key={items.id}>
<div className='cart-img'>
    <img src={items.img} alt=""/>
    <p>{items.name}</p>
</div>
<div className='add-reduce'>
    <button onClick={()=>handlechange(items,1)}>+</button>
    <button>{items.amount}</button>
    <button onClick={()=>handlechange(items,-1)}>-</button>
</div>
<div className='amount-remove'>
    <span>{items.price}</span>
    <button  onClick={()=>handleremove(items.id)}>remove</button>
</div>
    </div>
  ))}
  <div className='total'>
<h1>totla {price}</h1>
  </div>
  <div/>
  </div>
    )
}

export default Cart