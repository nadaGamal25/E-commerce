import React from 'react';

export const Head = () => {
  return (
    <>
    <section className="head">
        <div className="container-fluid d_flex">
            <div className=" left ">
            <i className="fa-solid fa-phone"></i>
            <label>+9902 456 234</label>
            <i className="fa-solid fa-envelope"></i>
            <label>e-commerce@yahoo.com</label>
            </div>
            <div className="right RText">
                <label>Theme FAQ's</label>
                <label>Need Helps</label>
                <label htmlFor="">EN</label>
            </div>
        </div>
    </section>
    </>
  );
};
