import "./App.css";
import { useState } from "react";

const api = {
  key: "0bc04181c5b8492b08cccdd4d08647cb",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div className="details">
            <div className="top-row">
              <div className="location">{weather.name}</div>
              <div className="temp fa fa-thermometer-half">&nbsp;&nbsp;{weather.main.temp}°C</div>
            </div>
            <div className="middle-row">
              <div className="col1">
                <span className="fa fa-tint"><label>&nbsp;&nbsp;Humidity({weather.main.humidity})</label></span>
                <span className="fa fa-line-chart"><label>&nbsp;&nbsp;Wind speed({weather.wind.speed})</label></span>
              </div>
              <div className="col2">{weather.weather[0].main}</div>
            </div>
            <div className="last-row">
            <p>Lat: {weather.coord.lon}</p>
            <p>Lon: {weather.coord.lat}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;



