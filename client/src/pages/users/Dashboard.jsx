import React from 'react';
import { Login } from '../Pages';
import { Account } from '../Pages';

const Dashboard = () => {
  return (
    <>
    {
  !auth.user ? (<Login/>) : (<Account/>)
}
    </>
  )
}

export default Dashboard