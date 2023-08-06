import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import CurrentDate from "./CurrentDate";
import TemperatureUnits from "./TemperatureUnits";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo-container">
      <h1>{props.data.city}</h1>
      <div className="row">
        <CurrentDate date={props.data.date} />
        <div className="col-sm">
          <div className="currentTemperature">
            <ul>
              <li>
                <TemperatureUnits fahrenheit={props.data.temperature} />
              </li>
              <li>
                <WeatherIcon code={props.data.icon} size={52} />
              </li>

              <li className="description text-capitalize">
                {props.data.description}{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm">
          <div className="data">
            <ul>
              <li>Feels like: {Math.round(props.data.feelsLike)}°</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
              <li>Hudmidity: {Math.round(props.data.humidity)}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
