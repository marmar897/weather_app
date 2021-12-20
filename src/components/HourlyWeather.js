import SearchField from "./SearchField";

function HourlyWeather(){
    return(
        <div>
        <h1>Welcome To My Weather App</h1>
        <div >
            <h2> Get Hourly Weather Reports on the city you want</h2>
            <SearchField/>
             {/* <WeatherCard/>  */}
            {/* <Container/> */}
             
       </div>
       </div>        
    );
}
export default HourlyWeather;
