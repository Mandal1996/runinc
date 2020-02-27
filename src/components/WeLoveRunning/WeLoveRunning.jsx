import React from 'react';
import Hero from '../../gfx/hero.jpg';
import './weloverunning.scss';

const WeLoveRunning = () => {
  return (
    <div class="minContainer">

      <div className="heroContainer">
        <img src={Hero} alt="We Love Running"/>
      </div>

      <div className="txtContainer">
        <p>We Love <span>Running</span></p>
      </div>
      
    </div>
  )
}

export default WeLoveRunning;