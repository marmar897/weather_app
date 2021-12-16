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
        return(
            <div className="weatherCard">
                <p>City: {this.props.weather.name}</p>
                <p> High Tempurature: {this.props.weather.main.temp_max}</p>
                <p>Low Tempurature: {this.props.weather.main.temp_min}</p>
                <p>Weather condition: {this.props.weather.weather[0].main}</p>
            </div>
        )
    }
}

export default WeatherCard;