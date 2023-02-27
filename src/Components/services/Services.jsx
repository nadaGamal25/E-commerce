import React from 'react';
import './services.css';
export default function Services() {
  return (
    <>
    <section className="service background">
        <div className="container">
            <div className="row g-3 pb-4">
                <div className="col-md-3 col-sm-6">
                <div className='product'>
                <div className='img icon-circle'>
                   <i className='fa-solid fa-truck-fast'></i>
                </div>
                <h3>Worldwide Delivery</h3>
                <p>We offer competitive prices on our 100 million plus product any range</p>
              </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className='product'>
                <div className='img icon-circle'>
                <i className='fa-solid fa-id-card'></i>
                </div>
                <h3>Safe Payment</h3>
                <p>We offer competitive prices on our 100 million plus product any range</p>
              </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className='product'>
                <div className='img icon-circle'>
                <i className='fa-solid fa-shield'></i>
                </div>
                <h3>Shop Confidence</h3>
                <p>We offer competitive prices on our 100 million plus product any range</p>
              </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className='product'>
                <div className='img icon-circle'>
                   <i className='fa-solid fa-headset'></i>
                </div>
                <h3>24/7 Support</h3>
                <p>We offer competitive prices on our 100 million plus product any range</p>
              </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
