import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from 'axios';

const RSVP = (props) => {
  const [ submitted, setSubmitted ] = React.useState(true);
  const [ name, setName ] = React.useState('');
  const [ email, setEmail ] = React.useState('');
  const [ attend, setAttend ] = React.useState(false);
  const [ guests, setGuests ] = React.useState(0);


  const formSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    axios.post('/register', {name: name, email: email, attend: attend, guests: guests})
    .then(resp => {
      if (resp.data.match) {
        alert(`You have already RSVP'ed! \nIf you have any questions or concerns please contact us at Email or Phone Number`)
      } else {
        setSubmitted(true);
      }
    })
  }

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value)
  }
  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value)
  }
  const handleAttend = (event, value) => {
    setAttend(value);
  }
  const handleGuests = (event) => {
    event.preventDefault();
    setGuests(event.target.value);
  }
  const handleInputSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <div className="rsvp">
        <form onSubmit={event => {
          formSubmit(event);
        }} onKeyDown={e => {
        if (e.key === 'Enter') {
          // Keeps form from submiting on hitting enter
          e.preventDefault();
        }}}
        >
          {!submitted ? (<>
          <div className="formContent">
          {props.bool ? (<p>이름</p>) : (<p>Name: </p>)}
          <input onSubmit={handleInputSubmit} className="formInfo" value={name} onChange={handleName}/>
          {props.bool ? (<p>이메일</p>) : (<p>Email: </p>)}
          <input onSubmit={handleInputSubmit} className="formInfo" value={email} onChange={handleEmail} type="email" />
          <div className="group">
          <p>Will You Be Attending?</p>
          <div className="radio">
          <input className="rad" onClick={(event) => handleAttend(event, false)} type="radio" name="attend"/>{props.bool ? (<label>아니요</label>) : (<label>No</label>)}
          <input className="rad" onClick={(event) => handleAttend(event, true)} type="radio" name="attend"/>{props.bool ? (<label>
            예</label>) : (<label>Yes</label>)}
            </div>
            </div>
          <div className="group">
          <p>How Many Will Be Attending?</p>
          <input className="num" value={guests} onChange={handleGuests} max={10} min={0} type="number"/>
          </div>
          {props.bool ? (<button>제출</button>) : (<button>Submit</button>)}
          </div>
          </>) :
          (<div className="registered">
            <p>You're All Set!</p>
            <p>Thank you for your RSVP to Jennifer Park and Gene Kim's Wedding!</p>
            <div className="rInfo">
              <p>Wednesday. Nov 23. 2024</p>
              <p>7:00 PM</p>
              <p>Reception House | Wedding Venue</p>
              <p>167-17 Northern Blvd</p>
              <p>Flushing, NY 11358</p>
            </div>
            <p>If you have any questions or concerns, feel free to contact us at</p>
            <p>Email or Phone Number</p>
          </div>)
        }
        </form>
      </div>
      <img className="flower1" src={require('../assets/flower1.png')} loading="lazy"/>
      <img className="flower2" src={require('../assets/flower1.png')} loading="lazy"/>
    </>
  )
}

// need to change inputs depending on whether we allow only plus ones or have each person input the amount of guests theyre bringing

export default RSVP;