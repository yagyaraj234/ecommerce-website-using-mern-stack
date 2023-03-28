import React from 'react';
import {BrowserRouter, Routes,Route,NavLink} from 'react-router-dom';
import {Contact, About, NewCollection, Shop,Home} from './index';
import { MagnifyingGlassIcon, HeartIcon,ShoppingCartIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <>
    <BrowserRouter>
   
    <div className='nav-links'>   
        <div>
    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/900px-Instagram_logo_2022.svg.png?20220518162235" alt="Logo" />
            <NavLink className='link' to='/'>Home</NavLink>
            <NavLink className='link' to='/shop'>Shop</NavLink>
            <NavLink className='link' to='/new-collection'>New Colection</NavLink>
            <NavLink className='link' to='/about'>About</NavLink>
            <NavLink className='link' to='/contact'>Contact</NavLink>
        </div>

        <div>
        <MagnifyingGlassIcon class='icon'/>
        <ShoppingCartIcon class='icon'/>
        <HeartIcon class='icon'/>
        

        </div>
    </div>


    <Routes>
        <Route path='/' element={<Home/>}></Route>
            {/* <Route >Home</Route> */}
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/new-collection' element={<NewCollection/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        
    </Routes>
    
    </BrowserRouter>

    
    
    
    </>
  )
}

export default Header