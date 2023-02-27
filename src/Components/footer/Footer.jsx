import React from 'react';
import './footer.css';

export default function () {
  return (
    <>
    <footer>
      <div className="container">
        <div className="row g-3">
          <div className='col-md-3 col-sm-6'>
        <div className='box'>
            <h2>E-commerce</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.in gravida.Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon'>
              <div className='img'>
                <i className='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img'>
                <i className='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>
          </div>
          <div className='col-md-3 col-sm-6'>
          <div className='box'>
            <h3>About Us</h3>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          </div>
          <div className='col-md-3 col-sm-6'>
          <div className='box'>
            <h3>Help</h3>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate </li>
              <li>Returns&Refunds </li>
            </ul>
          </div>
          </div>
          <div className='col-md-3 col-sm-6'>
          <div className='box'>
            <h3>Contact Us</h3>
            <ul>
              <li>70 Washington Square South, New York, NY 10012, United States </li>
              <li><span className='text-white'>Email:</span> uilib.help@gmail.com</li>
              <li><span className='text-white'>Phone:</span> +1 1123 456 780</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};
