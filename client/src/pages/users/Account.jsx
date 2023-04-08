import React from 'react'
import Layout from '../../components/Layout/Layout';
import '../../CSS/userDashboard.scss';
import { NavLink } from 'react-router-dom';
import { UserIcon ,PencilSquareIcon } from '@heroicons/react/24/solid';

const Account = () => {
  return (
    <Layout title='user-dashboard'>

      <div className="user-dashboard">
      <div className="user-details">
        <div className="user-icon">
          <UserIcon></UserIcon>
        </div>
        
          <p className='name'>Rakshit <PencilSquareIcon className='edit-icon'/></p>
          <p className='number'>587987527 <PencilSquareIcon className='edit-icon'/></p>
          <p className='email'>test@test.com <PencilSquareIcon className='edit-icon'/> </p>
        </div>

        <div className='left-dashboard'>
          <ul>
            <NavLink className='link-box' to='/edit-profile'>Edit Profile</NavLink>
            <NavLink className='link-box' to='/orders'>Orders</NavLink>
            <NavLink className='link-box' to='/refund'>Refund</NavLink>
            <NavLink className='link-box' to='/wallet'>Wallet</NavLink>
            <NavLink className='link-box' to='/saved-address'>Addresses</NavLink>
            <NavLink className='link-box' to='/contact'>Contact us</NavLink>
            <NavLink className='link-box Logout' to='/login'>Logout</NavLink>
          </ul>
        </div>


      </div>

    </Layout>
  )
}

export default Account