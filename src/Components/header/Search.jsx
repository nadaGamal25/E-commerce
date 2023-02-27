import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';
import './header.css';
import {useCart} from "react-use-cart";
import { useThemeHook } from '../ThemeProvider';

export const Search = () => {
  const [theme]= useThemeHook();
  window.addEventListener("scroll",function(){
    const search= document.querySelector(".search");
    search.classList.toggle("active",this.window.scrollY > 100);
  });

  const {
    isEmpty,
    totalItems,
  } = useCart();

  

  return (
    <>
    <section className="search">
      <div className="container-fluid px-5 c_flex">
        <div className="logo width">
          <img src={logo} alt="logo" />
        </div>
        <div className=" search-box ">
          <i className="fa-solid fa-magnifying-glass bx"></i>
        <input type="search" placeholder='Search...'/>
        <span className='m-auto'>Categories</span>
        </div>
        <div className="icon d-flex width">
        <i class="fa fa-user icon-circle"></i>
        <div className="cart d-flex">
          <Link to='/cart'>
          <i className="fa-solid fa-bag-shopping icon-circle"></i>
          {isEmpty?<span></span> : <span>{totalItems}</span>}
          </Link>
        </div>
        </div>
      </div>
    </section>
    </>
  );
};
