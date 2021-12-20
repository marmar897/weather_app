import React, { Component } from 'react';
import WeatherCard from './WeatherCard';
import {Link, Redirect } from "react-router-dom";

class SearchField extends Component{
    constructor(){
        super();
        this.state = {
            input: '',
            found: false,
            weatherReport:{} ,
           // err: null          
        }
    }

    onInputChange= (input) =>{
        this.setState({input});
        console.log(input)
        const apikey = "65f49b185422ab3909aa03d3c7df69de"
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}`)
          .then(res => {
              if(!res.ok){
                  this.setState({found: false});
                //   console.log("error: network response was not OK");
                  throw new Error ('Network responce was not OK');
              } 
              return res.json();
         })
          .then(weatherReport => this.setState({ weatherReport: weatherReport, found:true}))
         // .then(weather => console.log(weather))
        //   .catch(error => {
        //         this.setState({found: false})
        //         console.log("error: ", error)
        //  });
        // err => {
        //     this.setState({
        //         found:false
        //     })
        // };
    }

    handleClick = () => {

    }


    render(){
        let foundReport;           
        if(this.state.found){
            foundReport = <div> <WeatherCard weather={this.state.weatherReport}/>
             {/* <Redirect to={ {
                 pathname: '/HourlyWeather',
                 state: {this.state.weatherReport}
                 <button>Click to see hourly weather!</button> 
               }}  /> */}
               {/* <button onClick={handleClick}>Click to see hourly weather!</button> */}
               <Link 
                    to = {{
                        pathname: './HourlyWeather',
                        state: {
                            props: this.state.weatherReport}
                    }}>
                        <button>Checkout Hourly Weather in this City!</button>
               </Link>
            </div>
            console.log("its been found")
        }
        else{
            foundReport = <h3> No city/zipode weather results</h3>
        }

        return(           
            <div className ="searchField" > 
            <h3>Input a City or Zip Code to know its real time weather</h3>
            <input id= "submitId" placeholder="Input a City!" />
            <button onClick= {() => this.onInputChange(document.getElementById('submitId').value)}> Search </button>
            {foundReport}
            </div>
        )
    }
}

export default SearchField;