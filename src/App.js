import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

import coronaImage from './images/corona.jpg'

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    componentDidMount = async () => {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
        console.log("Data ", fetchedData);
    };

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});
        console.log(fetchedData);
    }

    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt={"COVID-19"}/>
                <Cards data={data}/>
                <br/>
                <br/>
                <br/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>

            </div>
        )
    }
}

export default App;