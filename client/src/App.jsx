import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cal from "./component/calendar";
import Countdown from "./component/countdown";
import RSVP from "./component/rsvp"

const App = () => {
  return (
    <div className="app">
      <div className="front">
        <div className="title">
          <p className="titleOne">We're Getting </p>
          <p className="titleOne">Married</p>
          <p className="titleTwo">Jennifer Park & Gene Kim</p>
        </div>
        <img className="poster" loading="lazy" src={require("./assets/images/v1.jpeg")}/>
      </div>
      <div className="details">
        <p className="italicized"><i>invite you to celebrate our special day</i></p>
        <div className="pageBreak">
          <p>Our</p>
          <p>Wedding</p>
          <p>Invitation</p>
        </div>
        <p className="welcome">Please Come And Join Us</p>
      </div>
      {/* <div className="blockTextureOne"></div> */}
      <div className="layeredImg">
        {/* <div className="blockTextureTwo"></div> */}
        <img className="frontImg" loading="lazy" src={require("./assets/images/v6.jpeg")} />
        <img className="backImg" loading="lazy" src={require("./assets/images/v3.jpeg")} />
        <p></p>
      </div>
      <p className="date">November 23rd 2024</p>
      {/* <div className="adjCont">
        <div className="blockTextureThree"></div>
        <div className="adjImgCont">
          <img className="adjacentImg" loading="lazy" src={require("./assets/images/v10.jpeg")} />
          <img className="adjacentImg" loading="lazy" src={require("./assets/images/v2.jpeg")} />
        </div>
      </div>
      <div className="oppCont">
        <div className="blockTextureFour"></div>
        <img className="topLeftImg" loading="lazy" src={require("./assets/images/v9.jpeg")} />
        <img className="bottomRightImg" loading="lazy" src={require("./assets/images/v4.jpeg")} />
      </div> */}
      <div className="grid">
        <div>
          <img className="gridImg" loading="lazy" src={require("./assets/images/v10.jpeg")} />
          <img className="gridImg" loading="lazy" src={require("./assets/images/v2.jpeg")} />
        </div>
        <div>
          <img className="gridImg" loading="lazy" src={require("./assets/images/v9.jpeg")} />
          <img className="gridImg" loading="lazy" src={require("./assets/images/client/temp_1728538557631.-1035770434.jpeg")} />
        </div>
      </div>
      <div className="pageBreak second">
          <p>Our</p>
          <p>Wedding</p>
          <p>Information</p>
        </div>
      <Countdown />
      <Cal />
      <img className="fillImg" loading="lazy" src={require("./assets/images/hMiddle.jpeg")}/>
      <div className="reception">
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Reception+House+%7C+Wedding+Venue+in+Flushing+Queens+%7C+%EA%B2%B0%ED%98%BC%EC%8B%9D,+%EB%8F%8C%EC%9E%94%EC%B9%98,+%ED%8C%8C%ED%8B%B0+%E7%BB%93%E5%A9%9A%E7%A4%BC%E5%A0%82/@40.7594679,-73.7988498,17z/data=!3m1!4b1!4m6!3m5!1s0x89c26176ca6a3891:0x2766d19b565077c5!8m2!3d40.7594679!4d-73.7988498!16s%2Fg%2F11hy_zdp6p?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">Reception House | Wedding Venue</a>
        <p className="detail">167-17 Northern Blvd, Flushing, NY 11358</p>
        <p className="detail"><i>November. 23. 2024</i></p>
        <p className="detail">7:00 PM</p>
      </div>
      <img className="gmap" loading="lazy" src={require("./assets/images/GMAP.jpg")}/>
      <p className="registering">RSVP</p>
      <RSVP />
    </div>
  )
}

export default App;
