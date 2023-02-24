import React from 'react';
import Link from 'next/link';
import {  AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from './Cart';
import { useStateContext } from '@/context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
      <div className='navbar-container header'>
          <p className="logo">
              <Link href="/">BaiMi Electronic Devices store</Link>
        </p>
        <button type='button' className='cart-icon' onClick={()=>setShowCart(true)}>
        <AiOutlineShoppingCart /> <sup className='cart-item-qty'>{totalQuantities}</sup> 
      </button>
      {showCart&& <Cart />}
    </div>
  )
}

export default Navbar