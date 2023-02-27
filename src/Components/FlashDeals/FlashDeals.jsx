import React from 'react';
import { useThemeHook } from '../ThemeProvider';
import FlashCard from './FlashCard';

export default function FlashDeals() {
  const [theme]= useThemeHook();
  
  return (
    <>
    <section className="flash background">
        <div className="container">
            <div className="heading d-flex">
            <i className="fa-solid fa-bolt"></i>
            <h1>Flash Deals</h1>
            </div>
            <div className="row g-3 px-3">
            <FlashCard/>
            </div>
        </div>
    </section>
    </>
  );
};
