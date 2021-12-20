// import React from 'react'
// import SearchField from './SearchField';
// import WeatherTable from './WeatherTable';
// import WeatherCard from './WeatherCard';

// class Container extends React.Component {
//   constructor(props) {
//     super(props)
//     /* TODO - Create state object for storing favLinks */
//     this.state ={favCards: []}
    
//   }

//   handleRemove = (index) => {
//     /*
//             TODO - Create logic for setting the state to filter array and remove favLink at index
//         */
//        let favCards = [this.state.favCards]
//        favCards.splice(index,1)
//        this.setState({favCards})
//   }

//   handleSubmit = (favCard) => {
//     /*
//             TODO - Create logic to setState and add new favLink to favLinks array in state
//         */
//        console.log("handleSubmit:", favCard.cityName, favCard.weatherReport)
//        let oldCards = this.state.favCards
//        this.setState({favCards: [...oldCards, favCards]})
//   }


//   render() {
//     return (
//       <div className="container">
//         <h1>My Favorite Cities and their Weather Reports</h1>
//         <p>Add a new Weather Report with a Zipcode or City to the table.</p>
//         {/*TODO - Add Table Component */}
//         <WeatherTable weatherData={this.state.favCards} removeCard={this.handleRemove}/>

//         <br />

//         <h3>Add New</h3>
//         {/*TODO - Add Form Component */}
//         <SearchField/>
//         {/* <Form submitForm={this.handleSubmit}/> */}
//       </div>
//     )
//   }
// }

// export default Container