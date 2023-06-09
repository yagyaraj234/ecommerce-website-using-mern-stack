import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <>
        <div className='shipping'>
          <p>Free shipping for standard order over ₹999 </p>
          <div className="navs-link">
            <NavLink className='btns'>Help & FAQs </NavLink>
            <span className='btns'>|</span>
            <NavLink className='btns' to='/account'>My Account</NavLink>
          </div>
        </div>
        <div className='navbar'>
          <NavLink to='/'>
          <img className='logo' src="Genz.png" alt="Logo" />
          </NavLink>
       

          <div className='nav-links'>
            
            <NavLink className='link' to='/'>Home</NavLink>
            <NavLink className='link' to='/shop'>Shop</NavLink>
            <NavLink className='link highlight' to='/new-collection'>New Collection
              <span>Hot</span>
            </NavLink>
            <NavLink className='link' to='/about'>About</NavLink>
            <NavLink className='link' to='/contact'>Contact</NavLink>
          </div>

          <div className='icon-field'>
            <MagnifyingGlassIcon class='icon' />
            <ShoppingCartIcon class='icon' />
            <HeartIcon class='icon' />
          </div>
        </div>


    </>
  )
}

export default Header