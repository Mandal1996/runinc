import React from 'react'
import './nextevent.scss'
import EventImage from '../../gfx/event.jpg'

const NextEvent = () => {
  return (
    <div className="nextEventContainer">
      <div className="nextEventImgContainer">
        <div className="nextEventImg">
          <img src={EventImage} alt="Next Event"/>
        </div>

        <div className="nextEventImgTxt">
          <p>Next Event</p>
        </div>
      </div>

      <div className="nextEventTxtContainer">
        <h2>Events</h2>

        <h3>Copenhagen Marathon</h3>
        <p>Den 29. maj 2018</p>

        <h3>Aarhus City Run</h3>
        <p>Den 1. juni 2018</p>

        <h3>Berling Marathon</h3>
        <p>Den 6. juni 2018</p>
      </div>
    </div>
  )
}

export default NextEvent