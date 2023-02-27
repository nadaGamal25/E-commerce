import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const [MobileMenu, setMobileMenu]= useState(false);
  return (
    <>
    <header className="header">
        <div className="container d_flex">
            <div className="categories d_flex align-items-center">
                <i className="fa-solid fa-border-all pe-1 fa-2x"></i>
                <h4>Categorises <i className="fa-solid fa-chevron-down"></i></h4>
            </div>
            <div className="navlink pt-2">
                <ul className={MobileMenu? "nav-links-MobileMenu":"link capitalize"} onClick={()=> setMobileMenu(false)}>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/user'>user accounts</Link>
                    </li>
                    <li>
                        <Link to='/vendor'>vendor accounts</Link>
                    </li>
                    <li>
                        <Link to='/track'>track myOrder</Link>
                    </li>
                    <li>
                        <Link to='/contact'>contact</Link>
                    </li>
                </ul>
                <button className="toggle" onClick={()=> setMobileMenu(!MobileMenu)}>
                    {MobileMenu? <i className='fa-solid fa-times close home-btn'></i>:
                    <i className='fi fa-bars open'></i>}
                </button>
            </div>
        </div>
    </header>
    </>
  );
};
