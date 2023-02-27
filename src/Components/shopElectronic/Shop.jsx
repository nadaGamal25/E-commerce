import React from 'react'
import ElectroCart from './ElectroCart'
import ShopCat from './ShopCat'
import './shop.css'

export default function Shop() {
  return (
    <>
    <section className="shop background">
        <div className="container">
        <div className="heading d_flex">
                <div className="heading-left d-flex align-items-center">
                <h2>Electronics</h2>
                </div>
                <div className="heading-right">
                    <span>View all</span>
                    <i className="fa-solid fa-caret-right"></i>
                </div>
            </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 p-3">
                <ShopCat/>
            </div>
            <ElectroCart/>
        </div>    
        </div>
    </section>
    </>
  )
}
