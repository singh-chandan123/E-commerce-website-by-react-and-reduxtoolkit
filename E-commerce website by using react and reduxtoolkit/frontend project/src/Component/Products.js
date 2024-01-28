import React, { useEffect, useState } from 'react'
import {  useDispatch } from 'react-redux';
import { addtocart } from '../Store/Cartslice';
const Products = () => {
    const[product,setproduct]=useState([]);
   useEffect(()=>{
const receivedata=fetch("https://fakestoreapi.com/products?sort=desc");
receivedata.then((response)=>{
   return response.json();
})
.then((data)=>{
    console.log(data);
    setproduct(data);
})
   },[])

   const dispatch=useDispatch();
   const handleclick=(product)=>{
   
    dispatch(addtocart(product))
   }
  return (
    <div className='wrapper'>
        {
            product.map((product)=>(
                <div className='allproduct'> 
                    <img className='image' src={product.image}/>
                    <h4 className='title'> {product.title}</h4>
                    <h5 className='price'>{product.price}</h5>
                    <button className='add' onClick={()=>{handleclick(product)}}>Add to Cart</button>

                    </div>
            )
            )
        }
    </div>
  )
}

export default Products