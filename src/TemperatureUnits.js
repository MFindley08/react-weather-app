import React, { useState } from "react";

export default function TemperatureUnits(props) {
  const [units, setUnits] = useState("fahrenheit");
  function displayCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  function fahrenheit() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }
  if (units === "fahrenheit") {
    return (
      <div className="TemperatureUnits">
        <span className="temperature"> {Math.round(props.fahrenheit)}</span>
        <span className="units">
          {" "}
          ℉ |{" "}
          <a href="/" onClick={displayCelsius}>
            ℃
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TemperatureUnits">
        <span className="temperature"> {Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={displayFahrenheit}>
            ℉{" "}
          </a>
          | ℃
        </span>
      </div>
    );
  }
}
