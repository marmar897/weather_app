import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
// import axios from 'axios';

import WeatherCard from './weatherCard';

function Homepage(){
    return(
        <div>
        <h1>Welcome To My Weather App</h1>
        <div >
        <WeatherCard/>
       </div>
       </div>
         
    );

}
export default Homepage;
