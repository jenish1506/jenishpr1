import React, { Component } from 'react';

class Contry extends Component {
    constructor (props){
        super (props);

        
        this.state = {
            countryName : 'India'
        }
    }
    changeCountry = () => {

        this.setState({
            countryName : 'us'
        });
    }
    render() {
        return (
            <div>
                <p>{
                    this.state.countryName}</p>
                    <button onClick={() => this.changeCountry()}>changeCountry</button>

            </div>
        );
    }
}

export default Contry;