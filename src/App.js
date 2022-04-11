import './App.css';
import React, { useState, useEffect } from 'react';
import {
  MenuItem,
  FormControl,
  Select
} from "@mui/material"
import InfoBox from './InfoBox';

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');


  useEffect(() => {

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {

          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }
          ));
          setCountries(countries);
        })
    }

    getCountriesData();
  }, [])

  const onCountryChange = (event) => {
    const countryCode = event.target.value;

    console.log(countryCode);
    setCountry(countryCode);
  }

  return (

    /* Header */
    /* Title + Select input dropdown field */

    <div className="app">
      <div className="app__header">
        <h1>COVID 19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>

            <MenuItem value="worldwide">Worldwide</MenuItem>
            {
              countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }

          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" cases={123} total={2000} />
        <InfoBox title="Revovered" cases={723} total={3000} />
        <InfoBox title="Deaths" cases={23} total={4000} />
      </div>


      {/* Table */}

      {/* Map */}
    </div>
  );
}

export default App;
