import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {

  return (
    <>
      <div className="bar">
        <div className="logo">
          {/* J|G */}
        </div>
        {!props.bool ? (
          <div className="links">
          <NavLink to="/" state={props.bool}>Home</NavLink>
          <NavLink to="/Gallery" state={props.bool}>Gallery</NavLink>
          <NavLink to="/Reception" state={props.bool}>Reception</NavLink>
          <NavLink to="/RSVP" state={props.bool}>RSVP</NavLink>
        </div>
        ): (
          <div className="links">
          <NavLink to="/" state={props.bool}>홈</NavLink>
          <NavLink to="/Gallery" state={props.bool}>갤러리</NavLink>
          <NavLink to="/Reception" state={props.bool}>피로연</NavLink>
          <NavLink to="/RSVP" state={props.bool}>RSVP</NavLink>
        </div>
        )}
        <div className="langSelect">
          {/* <p>Eng</p>
          <label className="switch">
            <input type="checkbox" id="lang" onClick={props.set}/>
            <span className="slider round"></span>
          </label>
          <p>한</p> */}
        </div>
      </div>
    </>
  )
}

export default NavBar;