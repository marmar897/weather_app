import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

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
          .then((res) => res.json())
            // if(res.status >= 400) {
            //     throw new Error("Server responds with error!");
            // } 
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


    render(){
        // let err;
        // if (err){
        //    return(
        //     <div> { err.message } </div>
        //    ) 
        // }
        let foundReport;           
        if(this.state.found){
            foundReport = <WeatherCard weather={this.state.weatherReport}/>
            console.log("its been found")
        }
        else{
            foundReport = <h2> no city weather results</h2>
        }

        return(           
            <div className ="searchField" > 
            <input id= "submitId" placeholder="Input a City!" />
            <button onClick= {() => this.onInputChange(document.getElementById('submitId').value)}> Search </button>
            {foundReport}
            </div>
        )
    }

}

export default SearchField;