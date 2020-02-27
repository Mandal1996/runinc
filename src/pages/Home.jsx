import React from 'react';
import WeLoveRunning from '../components/WeLoveRunning/WeLoveRunning';
import NextEvent from '../components/NextEvent/NextEvent';
import RunincShop from '../components/Shop/RunincShop';
import RunincContact from '../components/Contact/RunincContact';

const Home = () => {
  return (
    <div>
      <WeLoveRunning />
      <NextEvent />
      <RunincShop />
      <RunincContact />
    </div>
  )
}

export default Home;
