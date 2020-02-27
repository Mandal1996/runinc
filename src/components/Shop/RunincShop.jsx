import React from 'react';
import './runincshop.scss';
import FirstShoe from '../../img/shoe_01.jpg';
import SecondShoe from '../../img/shoe_02.jpg';
import ThirdShoe from '../../img/shoe_03.jpg';
import FourthShoe from '../../img/shoe_04.jpg';

function RunincShop() {
  return (
    <div className="shopContainer">
      <div className="shopTxt">
        <h2>shop</h2>

        <h3>runinc shop</h3>
        <p className="freeDelivery">Gratis fragt ved over kr. 500,-</p>

        <p>Nike</p>
        <p>Adidas</p>
        <p>Puma</p>
        <p>Asics</p>
        <p>Hummel</p>
      </div>
  
      <div className="shopShoes">
        <div className="shopLabel">
          <div className="blackShopLabel">
            <h2>shop</h2>
          </div>
        </div>

        <div className="shoesContainer">
          <div className="firstShoe">
            <img src={FirstShoe} alt="Puma Highland 3000 - brown" title="Puma Highland 3000 - brown"/>
            <p>Puma Highland 3000 - brown</p>
          </div>

          <div className="secondShoe">
            <img src={SecondShoe} alt="Asics Free Street" title="Asics Free Street"/>
            <p>Asics Free Street</p>
          </div>

          <div className="thirdShoe">
            <img src={ThirdShoe} alt="New Balance Runner Bounce" title="New Balance Runner Bounce"/>
            <p>New Balance Runner Bounce</p>
          </div>

          <div className="fourthShoe">
            <img src={FourthShoe} alt="New Balance New York 2018" title="New Balance New York 2018"/>
            <p>New Balance New York 2018</p>
          </div>

          <div className="fiveShoe">
            <img src={FirstShoe} alt="Puma Highland 3000 - brown" title="Puma Highland 3000 - brown"/>
            <p>Puma Highland 3000 - brown</p>
          </div>

          <div className="sixShoe">
            <img src={FourthShoe} alt="New Balance New York 2018" title="New Balance New York 2018"/>
            <p>New Balance New York 2018</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RunincShop;