import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../ThemeProvider';

export default function ElectroCart() {
    const [theme]= useThemeHook();
    const {addItem} = useCart();

    const [tproducts , setElectronics]= useState([]);

  async function getElectro(){
    let {data} =await axios.get('https://fakestoreapi.com/products');
    console.log(data);
    setElectronics(data)
  }

  useEffect(()=>{
    getElectro()
  },[]);
  return (
    <>
        {tproducts.slice(11,14).map((tproducts)=>{
        return(
    <div className="box col-lg-3 col-md-6 col-sm-6 p-3" key={tproducts.id}>
        <div className="product mtop">
            <div className="img">
                <span className="discount">15% off</span>
                 <img className='w-100 mt-3' src={tproducts.image} alt="product" />
                <div className="product-like">
                    <span>0</span><br />
                    <i className="fa-regular fa-heart"></i>
                </div>
            </div>
            <div className="product-details">
                <h3>{tproducts.category}</h3>
                <div className="rate">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
            </div>
            <div className="price">
                <h4>{tproducts.price}$</h4>
                <button onClick={()=> addItem(tproducts)}>
                <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    </div>
        )
    })}
    </>
  )
}
