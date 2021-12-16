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
        fetch('api.openweathermap.org/data/2.5/weather?q='+{input}+'&appid=65f49b185422ab3909aa03d3c7df69de')
    
        // SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY
          .then(response => response.json())
          .then(data => {
            this.setState({ found: true})
          //  console.log(this.state.gifs);
            console.log("found");
    
          })
          .catch(error => {
            this.setState({found: false})
           console.log("error: ")
         });

        // this.props.onTermChange(input);
    }

//     componentDidMount() {
//     fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={65f49b185422ab3909aa03d3c7df69de}")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.items
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }




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