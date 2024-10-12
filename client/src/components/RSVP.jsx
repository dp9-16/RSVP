import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from 'axios';

const RSVP = (props) => {
  const [ guests, setGuests ] = React.useState(0);

  const formSubmit = (event) => {
    event.preventDefault();
    axios.get('/test')
    .then(resp => {
      console.log(resp.data)
    })
    console.log('hi')
  }
  return (
    <>
      <div className="rsvp">
        <form onSubmit={event => {
          formSubmit(event);
        }}>
          {props.bool ? (<p>이름</p>) : (<p>Name: </p>)}
          <input placeholder="First Name"/><input placeholder="Last Name"/>
          {props.bool ? (<p>이메일</p>) : (<p>Email: </p>)}
          <input type="email" />
          <p>Will You Attend?</p>
          <input type="radio" value="no" name="attend" value="no"/>{props.bool ? (<label>아니요</label>) : (<label>No</label>)}
          <input type="radio" value="yes" name="attend" value="yes"/>{props.bool ? (<label>
            예</label>) : (<label>Yes</label>)}
          <p>Plus One: </p>
          <input type="radio" value="no" name="po" value="no"/>{props.bool ? (<label>아니요</label>) : (<label>No</label>)}
          <input type="radio" value="yes" name="po" value="yes"/>{props.bool ? (<label>
            예</label>) : (<label>Yes</label>)}
          {props.bool ? (<button>제출</button>) : (<button>Submit</button>)}
        </form>
      </div>
      <img className="flower1" src={require('../assets/flower1.png')} loading="lazy"/>
      <img className="flower2" src={require('../assets/flower1.png')} loading="lazy"/>
    </>
  )
}

// need to change inputs depending on whether we allow only plus ones or have each person input the amount of guests theyre bringing

export default RSVP;