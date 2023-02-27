import React from 'react';
import './annouc.css';
import annouc1 from '../../assets/annouc1.jpg';
import annouc2 from '../../assets/annouc2.avif.png';

export default function Annouc() {
  return (
    <>
    <div className="annouc background">
        <div className="container">
            <div className="row">
            <div className="col-4">
                <img className='w-100' src={annouc1} alt="annoucement" />
            </div>
            <div className="col-8">
                <img className='w-100' src={annouc2} alt="annoucement" />
            </div>
            </div>
        </div>
    </div>
    </>
  );
};
