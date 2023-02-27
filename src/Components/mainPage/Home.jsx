import React from 'react'
import Categories from './Categories'
import Slider from './Slider'
import './home.css'
import FlashDeals from '../FlashDeals/FlashDeals'
import { useThemeHook } from '../ThemeProvider'
import TopCat from '../TopCat/TopCat'
import NewArrival from '../newArrivals/NewArrival'
import Shop from '../shopElectronic/Shop'
import Annouc from '../announcements/Annouc'
import Services from '../services/Services'

export default function Home() {
  const [theme]= useThemeHook();
  
  return (
    <>
    <section className="home">
      <div className="container d_flex">
        <div className="row">
        <Categories/>
        <Slider/>
        </div>
        
      </div>
    </section>
    <FlashDeals/>
    <TopCat/>
    <NewArrival/>
    <Shop/>
    <Annouc/>
    <Services/>
    </>
  )
}
