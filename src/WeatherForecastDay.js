import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
  function temperatureHigh() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function temperatureLow() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day()} </div>
      <WeatherIcon code={props.data.weather[0].icon} size={34} />
      <div className="WeatherForecast-temperature mb-4">
        <span className="WeatherForecast-high">{temperatureHigh()}</span>
        <span className="WeatherForecast-low">{temperatureLow()}</span>
      </div>
    </div>
  );
}
