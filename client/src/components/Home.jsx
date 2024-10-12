import React from "react";
import { useLocation } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <div className="home">
        {props.bool ? (<div className="kName"><p>박아름</p><p>&</p><p>김진성</p></div>)
            : (<div className="eName"><p>Jennifer Park</p><div className="mid"><div className="line"></div><p>&</p><div className="line"></div></div><p>Gene Kim</p></div>)}
        <div className="homeInfo">
          <p>November. 23. 2024</p>
          <p>7:00 PM</p>
          <p>Reception House | Wedding Venue</p>
        </div>
        <img className="flower1" src={require('../assets/flower1.png')} loading="lazy"/>
        <img className="flower2" src={require('../assets/flower1.png')} loading="lazy"/>
      </div>
    </>
  )
}

export default Home;