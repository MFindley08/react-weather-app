import React from "react";

export default function CurrentDate(props) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = weekDays[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="col-sm">
      <div className="date">
        <ul>
          <li>
            Today is {day}
            and the
          </li>

          <li>
            current local time is: {hours}:{minutes}
          </li>
        </ul>
      </div>
    </div>
  );
}
