import React from 'react';
import '../CSS/Categories.scss';

import men from '../Product images/Categoreis/Categ1.jpg'
import women from '../Product images/Categoreis/Categ2.jpg'
import Assesories from '../Product images/Categoreis/Categ3.jpg'

const Categories = () => {
  return (
    <div className='categ-box'>

            <div className="box">
                <img className='catog-img' src={men} alt="men" />
                <p>Men</p>
            </div>
            <div className="box">
                <img className='catog-img' src={women} alt="men" />
                <p>Women</p>
            </div>
            <div className="box">
                <img className='catog-img' src={Assesories} alt="men" />
                <p className='text'>Assesories</p>
            </div>
            


    </div>
  )
}

export default Categories;