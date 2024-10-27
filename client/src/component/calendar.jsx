import { useState } from "react";
import Calendar from "react-calendar";

const Cal = () => {

  return (
    <div className="calCont">
      <img className="calImg" loading="lazy" src={require("../assets/images/v5.jpeg")} />
      <Calendar
        defaultView="month"
        minDetail="month"
        minDate={new Date(2024,10, 1)}
        maxDate={new Date(2024,10, 30)}
        value={new Date(2024, 10, 23)}
        prev2Label={null}
        next2Label={null}
        onClickMonth={null} />
    </div>
  )
}

export default Cal;