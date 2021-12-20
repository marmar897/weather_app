
import React from "react";
// import axios from "axios";
// import "./styles.css";

import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';

//importing components
import WeatherCard from "./components/WeatherCard";
import Homepage from "./components/Home";
import HourlyWeather from './components/HourlyWeather';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <div className="navigationMenu">
        <Link to="/" className="navigationItems">Home</Link>
        <Link to="/HourlyWeather" className="navigationItems">Hourly</Link>
        {/* <Link to="/About" className="navigationItems">About</Link>  */}

      </div>
        
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
  

          <Route exact path="/HourlyWeather" element={<HourlyWeather/>}/>

          {/* <Route path="/About">
            <About />
          </Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;