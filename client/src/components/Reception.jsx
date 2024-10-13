import React from "react";

const Reception = (props) => {
  return (
    <>
      <div className="reception">
        <p className="title">November. 23. 2024</p>
        <div className="line">
          <p></p>
          </div>
        <p className="info">7:00 PM</p>
        <p className="info"><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Reception+House+%7C+Wedding+Venue+in+Flushing+Queens+%7C+%EA%B2%B0%ED%98%BC%EC%8B%9D,+%EB%8F%8C%EC%9E%94%EC%B9%98,+%ED%8C%8C%ED%8B%B0+%E7%BB%93%E5%A9%9A%E7%A4%BC%E5%A0%82/@40.7594679,-73.7988498,17z/data=!3m1!4b1!4m6!3m5!1s0x89c26176ca6a3891:0x2766d19b565077c5!8m2!3d40.7594679!4d-73.7988498!16s%2Fg%2F11hy_zdp6p?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"><b>Reception House | Wedding Venue</b></a></p>
        <p className="info"><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Reception+House+%7C+Wedding+Venue+in+Flushing+Queens+%7C+%EA%B2%B0%ED%98%BC%EC%8B%9D,+%EB%8F%8C%EC%9E%94%EC%B9%98,+%ED%8C%8C%ED%8B%B0+%E7%BB%93%E5%A9%9A%E7%A4%BC%E5%A0%82/@40.7594679,-73.7988498,17z/data=!3m1!4b1!4m6!3m5!1s0x89c26176ca6a3891:0x2766d19b565077c5!8m2!3d40.7594679!4d-73.7988498!16s%2Fg%2F11hy_zdp6p?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"><u>167-17 Northern Blvd, Flushing, NY 11358</u></a></p>
        <p className="info">Dress Code</p>
        <img className="recImg" loading='lazy' src={require('../assets/GMAP.jpg')}/>
      </div>
      <img className="flower1" src={require('../assets/flower1.png')} loading="lazy"/>
      <img className="flower2" src={require('../assets/flower1.png')} loading="lazy"/>
    </>
  )
}

export default Reception;