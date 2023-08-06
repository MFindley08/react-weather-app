import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import CurrentDate from "./CurrentDate";
import TemperatureUnits from "./TemperatureUnits";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-9">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <CurrentDate date={props.data.date} />
            </li>
          </ul>
        </div>
        <div className="col">
          <div className="currentTemperature-container ">
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
      </div>
      <div className="col-sm">
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
