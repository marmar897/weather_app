import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
// import axios from 'axios';

import WeatherCard from './WeatherCard';
import SearchField from './SearchField';
import Container from './Container';

function Homepage(){
    return(
        <div>
        <h1>Welcome To My Weather App</h1>
        <div >
            <SearchField/>
             {/* <WeatherCard/>  */}
            {/* <Container/> */}
             
       </div>
       </div>
         
    );

}
export default Homepage;
