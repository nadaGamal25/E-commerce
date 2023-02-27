import axios from 'axios';
import React, { useEffect, useState } from 'react';
import newicon from '../../assets/newicon.png';
import './arrivals.css'
export default function NewArrival() {
    const [newArrivals , setArrivals]= useState([]);

  async function getArrivals(){
    let {data} =await axios.get('https://fakestoreapi.com/products');
    setArrivals(data)
  }

  useEffect(()=>{
    getArrivals()
  },[]);
  return (
    <>
    <section className="newarrival background">
        <div className="container">
            <div className="heading d_flex">
            <div className="heading-left d-flex align-items-center">
                <img className='newicon' src={newicon} alt="icon" />
                <h2>New Arrivals</h2>
                </div>
                <div className="heading-right">
                    <span>View all</span>
                    <i className="fa-solid fa-caret-right"></i>
                </div>
            </div>

            <div className="row mt-1 content product">
                {newArrivals.slice(3,9).map((val,index)=>{
                    return(
                        <div className="col-md-2 col-sm-6" key={index}>
                            <div className="box">
                                <div className="img">
                                    <img className='w-100' src={val.image} alt="product" />
                                </div>
                                <h3>{val.category}</h3>
                                <span>{val.price}$</span>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    </section>
    </>
  )
}
