import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import { Header } from '../header/Header';
import { useThemeHook } from '../ThemeProvider';

export default function Layout() {
  const [theme]= useThemeHook();
  return (
    <>
    <Header/>
    <Outlet></Outlet>
    <Footer/>
    </>
  );
};
