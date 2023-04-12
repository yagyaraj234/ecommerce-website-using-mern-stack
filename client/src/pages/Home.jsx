import React from 'react';
import Slider from '../components/Slider'
import Layout from '../components/Layout/Layout';
import { useAuth } from '../context/auth';


export const Home = () => {

  const [auth,setAuth]=useAuth()
  return (
    <Layout >
      {/* <Slider></Slider> */}
      <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  )
}

export default Home;