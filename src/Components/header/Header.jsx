import React from 'react';
import './header.css';
import { Head } from './Head';
import { Navbar } from './Navbar';
import { Search } from './Search';
import { useThemeHook } from '../ThemeProvider';

export const Header = () => {
  const [theme]=  useThemeHook();
  return (
    <>
    <Head/>
    <Search/>
    <Navbar/>
    </>
  );
};
