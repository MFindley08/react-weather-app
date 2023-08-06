import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [data, setData] = useState(null);

  useEffect(() => {
    if (props.coordinates) {
      let apiKey = "3dce9b1c66837262a25b3f448d354a76";
      let latitude = props.coordinates.lat;
      let longitude = props.coordinates.lon;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

      axios.get(apiUrl).then(handleResponse);
    }
  }, [props.coordinates]);

  function handleResponse(response) {
    setData(response.data.daily);
    setLoaded(true);
  }

  if (loaded && data) {
    return (
      <div className="Forecast">
        <div className="row mt-5">
          {data.slice(0, 5).map((dailyForecast, index) => (
            <div className="col" key={index}>
              <WeatherForecastDay data={dailyForecast} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
