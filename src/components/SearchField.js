import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

class SearchField extends Component{
    constructor(){
        super();
        this.state = {
            input: '',
            found: false,
            weatherReport:{}           
        }
    }

    onInputChange= (input) =>{
        this.setState({input});
        console.log(input)
        const apikey = "65f49b185422ab3909aa03d3c7df69de"
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}`)
        // SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY
          .then(res => res.json())
          .then(weatherReport => this.setState({ weatherReport: weatherReport, found:true}))
         // .then(weather => console.log(weather))
          .catch(error => {
                    this.setState({found: false})
                   console.log("error: ", error)
                 });
    }


    render(){
        let weather;           
        if(this.state.found){
            weather = <WeatherCard weather={this.state.weatherReport}/>
            console.log("its been found")
        }
        else{
            weather = <h2> no city weather results</h2>
        }

        return(           
            <div className ="searchField" > 
            <input id= "submitId" placeholder="Input a City!" />
            <button onClick= {() => this.onInputChange(document.getElementById('submitId').value)}> Search </button>
            {weather}
            </div>
        )
    }

}

export default SearchField;