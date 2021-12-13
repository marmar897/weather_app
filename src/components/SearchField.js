import React, { Component } from 'react';

class SearchField extends Component{
    constructor(){
        super();
        this.state = {input: ''}
    }

    onInputChange(input) {
        this.setState({input});
        console.log(input)
         this.props.onTermChange(input);
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