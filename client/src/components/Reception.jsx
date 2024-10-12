import React from "react";

const Reception = (props) => {
  return (
    <>
      <div className="reception">
        <p className="title">Reception House | Wedding Venue</p>
        <div className="line block"></div>
        <p className="info">November. 23. 2024</p>
        <p className="info">7:00 PM</p>
        <p className="info">167-17 Northern Blvd, Flushing, NY 11358</p>
        <p className="info">Dress Code</p>
        <img className="recImg" loading='lazy' src={require('../assets/GMAP.jpg')}/>
      </div>
      <img className="flower1" src={require('../assets/flower1.png')} loading="lazy"/>
      <img className="flower2" src={require('../assets/flower1.png')} loading="lazy"/>
    </>
  )
}

export default Reception;