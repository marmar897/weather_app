
import React from "react";
// import axios from "axios";
// import "./styles.css";

import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';

//importing components
import WeatherCard from "./components/WeatherCard";
import Homepage from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <div className="navigationMenu">
        <Link to="/" className="navigationItems">Home</Link>
        {/* <Link to="/Likes" className="navigationItems">Likes</Link>
        <Link to="/About" className="navigationItems">About</Link> */}

      </div>
        
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
  
{/* 
          <Route path="/Likes">
            <Likes/>
          </Route>

          <Route path="/About">
            <About />
          </Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;