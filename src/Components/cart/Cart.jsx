import React from 'react';
import { useThemeHook } from '../ThemeProvider';
import { useCart } from 'react-use-cart';
import './cart.css';

export default function Cart() {
  const [theme]= useThemeHook();
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <>
    <section className="cart-items">
      <div className="container">
        <div className="cart-details">
          <h1 className='mt-5'>
            {isEmpty? 'YOUR CART IS EMPTY': 'The Cart'}
          </h1>
          <div className="row">
            <div className="col-md-9">
            <div className="cartTable">
          <table class="table table-striped table-hover my-5">
          <tbody>
            {items.map((item, index)=>{
              return(
                <tr key={index}>
               <td><div className="img">
                 <img src={item.image} alt="product" />
               </div></td>
               <td><h6>{item.title.split(" ").slice(0,4).join(" ")}</h6></td>
               <td>{item.price}$</td>
               <td>Quantity ({item.quantity})</td>
               <td>
               <button className='btn btn-primary me-1'onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
               <button className='btn btn-primary'onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
               <button className='btn btn-danger m-1' onClick={()=> removeItem(item.id)}>Remove</button>
                </td>
               </tr>
              )
            })}
            
          </tbody>
          </table>
          </div>
            </div>

            <div className="col-md-3">
            {!isEmpty && 
          <div className=" cart-total  text-center my-5">
            <h4 className='pt-2'>Total Price: {cartTotal}$</h4>
            <div className='ms-auto'>
            <button className="btn btn-primary m-2" onClick={()=> emptyCart()}><i class="fa-solid fa-cart-shopping"></i> Clear Cart</button>              
            </div>
          </div>
          }
            </div>
          
          
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

