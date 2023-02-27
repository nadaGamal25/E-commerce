import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../ThemeProvider';

const NextArrow= (props)=>{
    const {onClick}= props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="next">
            <i className="fa-solid fa-arrow-right-long"></i>
            </button>
        </div>
    );
};
const PrevArrow= (props)=>{
    const {onClick}= props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
            <i className="fa-solid fa-arrow-left-long"></i>
            </button>
        </div>
    );
};

export default function FlashCard() {
    
    const [theme]= useThemeHook();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    const [tproducts , setProducts]= useState([]);

  async function getProduct(){
    let {data} =await axios.get('https://fakestoreapi.com/products');
    console.log(data);
    setProducts(data);
  }

  useEffect(()=>{
    getProduct();
  },[]);

  const {addItem} = useCart();

  return (
    <>
            <Slider {...settings}>
    {tproducts.slice(2,).map((tproducts)=>{
        return(
    <div className="box col-md-3 p-3" key={tproducts.id}>
        <div className="product mtop">
            <div className="img">
                <span className="discount">30% off</span>
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
            </Slider>
    
    </>
  );
};
