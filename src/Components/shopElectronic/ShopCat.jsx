import React from 'react'

export default function ShopCat() {
  return (
    <>
    <div className="electro mtop">
      <div className="chead d_flex">
        <h4>Brands</h4>
        <h4>shops</h4>
      </div>
      <div className="box">
        <ul>
          <li>
          <i className="fa-solid fa-plug-circle-bolt"></i>
          <span>Gaming drives</span>
          </li>
          <li>
          <i className="fa-solid fa-plug-circle-bolt"></i>
          <span>Televisions</span>
          </li>
          <li>
          <i className="fa-solid fa-plug-circle-bolt"></i>
          <span>Laptops</span>
          </li>
          <li>
          <i className="fa-solid fa-plug-circle-bolt"></i>
          <span>Smart phones</span>
          </li>
          <li>
          <i className="fa-solid fa-plug-circle-bolt"></i>
          <span>Electric VD</span>
          </li>
        </ul>
      </div>
      <div className="box box2 text-center">
        <button>View all brands</button>
      </div>
    </div>
    </>
  )
}
