import react,{Component} from 'react';

class WeatherCard extends Component{
    constructor(props){
        super(props)
        this.setState = {
            city: "",
            highTemp: "",
            lowTemp: "",
            weatherCondition : ""
        }
    }

    render(){
        return(
            <div className="weatherCard">
                <p>City: {this.props.city}</p>
                <p> High Tempurature: {this.props.highTemp}</p>
                <p>Low Tempurature: {this.props.lowTemp}</p>
                <p>Weather condition: {this.props.weatherCondition}</p>
            </div>
        )
    }
}

export default WeatherCard;