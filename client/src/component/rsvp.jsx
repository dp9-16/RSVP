import React, { useState, useEffect } from "react";
import axios from 'axios';
import RSVPForm from "./rsvpform"

const RSVP = () => {
  const [ submitted, setSubmitted ] = React.useState(false);
  const [ name, setName ] = React.useState('');
  const [ email, setEmail ] = React.useState('');
  const [ attend, setAttend ] = React.useState(false);
  const [ guests, setGuests ] = React.useState(0);
  const [ gnames, setGN ] = React.useState([]);

  const formSubmit = (event) => {
    event.preventDefault();
    var count = 0;
    var g = guests;
    if (attend) {
      count = g + 1;
      console.log( typeof g);
      // setGuests(g + 1)
    }
    axios.post('/register', {name: name, email: email, attend: attend, guests: count, guestNames: gnames})
    .then(resp => {
      if (resp.data.match) {
        alert(`You have already RSVP'ed! \nIf you have any questions or concerns please contact us at Email or Phone Number`)
      } else {
        setSubmitted(true);
      }
    }). catch((err) => {
      console.error(err);
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
  const handleAttend = (event, value, id, thisId) => {
    let el = document.getElementById(id);
    let elem = document.getElementById(thisId)
    if (!elem.checked) {
      event.preventDefault();
    }
    if (el.checked) {
      el.checked = false;
    }
    setAttend(value);
  }
  const handleGuests = (event) => {
    var val = event.target.value;
    if (val > 10) {
      val = Math.floor(val/10);
    }
    setGuests(val);
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
          e.preventDefault();
        }}}
        >
          {!submitted ?
          (<RSVPForm name={name} email={email} attend={attend} guests={guests} setGuests={setGuests} gnames={gnames} setGN={setGN} handleName={handleName} handleEmail={handleEmail} handleAttend={handleAttend} handleGuests={handleGuests} handleInputSubmit={handleInputSubmit}/>) :
          (<div className="registered">
            <p>You're All Set!</p>
            <p>Thank you for your RSVP to Jennifer Park and Gene Kim's Wedding!</p>
            <div className="rInfo">
              <p>Saturday. Nov 23. 2024</p>
              <p>7:00 PM</p>
              <br></br>
              <p>Reception House | Wedding Venue</p>
              <p>167-17 Northern Blvd</p>
              <p>Flushing, NY 11358</p>
            </div>
          </div>)
        }
        </form>
      </div>
    </>
  )
}

// need to change inputs depending on whether we allow only plus ones or have each person input the amount of guests theyre bringing

export default RSVP;
