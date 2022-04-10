import './App.css';
import React, { useState, useEffect } from 'react';
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent
} from "@mui/material"

function App() {
  
  // https://disease.sh/v3/covid-19/countries
  
  // USE EFFECT = Runs a piece of code based on a given condition 
  useEffect(() => {
    // The code inside here run once
    // when the component loads and not again after   
  }, [countries])
  
  
  // STATE = How to write variable in react
  const [countries, setCountries] = useState([
    'USA', 'UK', 'INDIA'
  ]);


  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID 19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* Loop through all the countries and show a drop down list of the options */}

            {
              countries.map(country => (
                <MenuItem value={country}>{country}</MenuItem>
              ))
            }

            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem> */}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* Info Boxes */}
      {/* Info Boxes */}
      {/* Info Boxes */}

      {/* Table */}

      {/* Map */}
    </div>
  );
}

export default App;
