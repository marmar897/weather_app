import React, { Component } from 'react';
import { useEffect, useState } from "react";

class SearchField extends Component{
    constructor(){
        super();
        this.state = {
            input: '',
            found: '',
            error: null,
            isLoaded: false,
            items: []
        }
    }

    onInputChange= (input) =>{
        this.setState({input});
        console.log(input)
        const apikey = "65f49b185422ab3909aa03d3c7df69de"
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}`)
        // SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY
          .then(res => res.json())
          .then(city => console.log(city))
        //   .catch(error => {
        //             this.setState({found: false})
        //            console.log("error: ", error)
        //          });
    }





    render(){
        return(
            <div className ="searchField" > 
            <input id= "submitId" placeholder="Input a City!" />
            <button onClick= {() => this.onInputChange(document.getElementById('submitId').value)}> Search </button>

            </div>
        )
    }

}

export default SearchField;