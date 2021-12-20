import react,{Component} from 'react';

class WeatherCard extends Component{
    constructor(props){
        super(props)
        // this.setState = {
        //     city: "",
        //     highTemp: "",
        //     lowTemp: "",
        //     weatherCondition : ""
        // }
    }


    render(){
        console.log(this.props.weather.weather[0].icon);
        console.log(this.props.weather);
    //   let URL = 'http://openweathermap.org/img/w/'${props.icon}.png
        return(
            <div className="weatherCard">
                <p>City: {this.props.weather.name}</p>
                <img src = {`http://openweathermap.org/img/w/${this.props.weather.weather[0].icon}.png`}/>
                <p>High Tempurature: {this.props.weather.main.temp_max}</p>
                <p>Low Tempurature: {this.props.weather.main.temp_min}</p>
                <p>Weather Currently: {this.props.weather.weather[0].main}</p>

            </div>
        )
    }
}

export default WeatherCard;