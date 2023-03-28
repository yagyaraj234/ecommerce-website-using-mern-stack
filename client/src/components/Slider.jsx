import React from 'react';
import slider from '../Product images/Slider/Slider1.jpg';
import '../CSS/Slider.scss';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className='slider-parent'>
        <img className='slider' src={slider} alt="Slider-image-1" />
        <div className='slider-btn'>
            <h3 >Women's Collection</h3>
            <h1>New Season</h1>
           <Link className='Button' to='/shop'>Shop Now</Link>
        </div>
    </div>
  )
}

export default Slider