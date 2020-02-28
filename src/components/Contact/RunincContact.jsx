import React from 'react';
import './runincContact.scss';
import contactMap from '../../gfx/map.JPG';

const RunincContact = () => {
  return (
    <div className="contactContainer">
      <div className="contactForm">
        <form action="">
          <h2>Send en besked</h2>
          <label htmlFor="Name">Navn:</label>
          <input type="text" />

          <label htmlFor="Email">Email:</label>
          <input type="text" />

          <label htmlFor="Number">Telefonnr:</label>
          <input type="number" />

          <label htmlFor="Message">Besked:</label>
          <textarea></textarea>

          <input type="button" value="SEND BESKED" />
        </form>
      </div>

      <div className="contactMapContainer">
        <div className="contactTxtContainer">
          <h2>Contact</h2>
        </div>
        <div className="contactMap">
          <img src={contactMap} alt="" />
        </div>
      </div>

      <footer>
        <h2>Runinc</h2>
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.dk/maps/place/Kannikegade+12,+8000+Aarhus/@56.1559638,10.2079182,17z/data=!3m1!4b1!4m5!3m4!1s0x464c3f912f62ab41:0x48867ab4c702e53a!8m2!3d56.1559638!4d10.210107"><p>Kannikegade 12</p>
          <p>8000 Århus C</p></a>
        <p><a className="footerLinkBorder" href="tel:+4526132696">Telefon 26 13 26 96</a></p>
        <p><a className="footerLinkBorder" href="mailto:info@runinc.dk">info@runinc.dk</a></p>
      </footer>
    </div>
  )
}

export default RunincContact;
