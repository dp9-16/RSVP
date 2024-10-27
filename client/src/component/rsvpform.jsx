import React, { useState, useEffect } from "react";

const RSVPForm = (props) => {
  const [ gChange, setGC ] = React.useState(props.guests);
  const [ deleted, setDel ] = React.useState(false);

  useEffect(() => {
    props.setGN((prevData) => {
      const data = [...prevData];
      if (gChange < props.guests) {
        var i = 0;
        for (i; i < props.guests-gChange; i++) {
          data.push({"name": ""});
        }
      } else {
        if (!deleted) {
          var i = 0;
          for (i; i < gChange-props.guests; i++) {
            data.pop();
          }
        }
      }
      return data;
    });
    setDel(false);
    setGC(props.guests);
  }, [props.guests])

  const handleChange = (event, id) => {
    const onChangeVal = [...props.gnames];
    onChangeVal[id]["name"] = event.target.value;
    props.setGN(onChangeVal);
  }
  const handleDel = (event, index) => {
    const del = [...props.gnames];
    del.splice(index, 1);
    props.setGN(del);
    setDel(true);
    setGC(props.guests-1);
    props.setGuests(props.guests - 1);
  }

  return (
    <div className="formContent">
      <input onSubmit={props.handleInputSubmit} className="formInfo" value={props.name} onChange={props.handleName} required placeholder="First, Last Name"/>
      <input onSubmit={props.handleInputSubmit} className="formInfo" value={props.email} onChange={props.handleEmail} type="email" placeholder="example@gmail.com"/>
      <div className="group">
        <p>Will You Be Attending?</p>
        <div className="radio">
          <input className="rad" id="yes" onClick={(event) => props.handleAttend(event, true, "no", "yes")} type="checkbox" name="attend"/><label>Yes</label>
          <input className="rad" id="no" onClick={(event) => props.handleAttend(event, false, "yes", "no")} type="checkbox" name="attend"/><label>No</label>
        </div>
      </div>
      {props.attend ?
      (<>
        <div className="group">
          <p>How Many Will Be Attending With You?</p>
          <input required className="num" value={props.guests} onChange={props.handleGuests} max={10} min={0} type="number"/>
        </div>
        {props.gnames.map((obj, id) => {
         return (
          <div className="nameInput" key={id}>
            <input className="name" required value={obj.name} onChange={(e) => handleChange(e, id) } placeholder="First, Last Name"/>
            <p className="delete" onClick={(e) => handleDel(e, id)}>x</p>
          </div>
         )
        })}
      </>) : (<></>)
      }
      <button className="subButt">Submit</button>
    </div>
  )
}

export default RSVPForm;