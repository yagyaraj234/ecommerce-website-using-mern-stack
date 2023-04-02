import React from 'react';
import '../../CSS/Footer.scss';
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
        <div className='footer-box'>
            <div className='box1 box'>
                <h4>Categories</h4>
                <NavLink className='footer-link'>Women</NavLink>
                <NavLink className='footer-link'>Men</NavLink>
                <NavLink className='footer-link'>Kids</NavLink>
                <NavLink className='footer-link'>Shoes</NavLink>
                <NavLink className='footer-link'>Accesories</NavLink>
            </div>
            <div className='box2 box'>
                <h4>Help</h4>
                <NavLink className='footer-link'>Track Order</NavLink>
                <NavLink className='footer-link'>Returns</NavLink>
                <NavLink className='footer-link'>Shipping</NavLink>
                <NavLink className='footer-link'>FAQ's</NavLink>
            </div>
            <div className='box3 box'>
                <h4>Get In Touch</h4>
                <p> <b>Street: </b>
                    Sheetal Enclave, Lt A K Marg, Gurgaon</p>
                    <p> <b>City: </b>   Delhi</p>
                    <p> <b>State/province/area: </b>   Haryana</p>
                   <p> <b>Phone number: </b>  01242300325</p>      
            </div>
            <div className='box4 box'>
                <h4>Newsletter</h4>
                <form >
                    <input className='input-field' type="text"  placeholder='xyz@mail.com'/>
                    <button className='btns'>SUBSCRIBE</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Footer;