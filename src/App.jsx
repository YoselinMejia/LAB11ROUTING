import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import Home from './Home';
import City from './City';
import CityFeature from './CityFeature';
import 'bootstrap/dist/css/bootstrap.min.css';


const citiesData = {
  
  "New York": {
    features: ["Statue of Liberty", "Central Park"],
    featuresDetails: {
        "Statue of Liberty": "An iconic monument on Liberty Island, gifted by France in 1886, symbolizing freedom and democracy.",
        "Central Park": "A large urban park in Manhattan, offering lakes, theaters, trails, and a zoo."
    }
  },
  "Los Angeles": {
    features: ["Hollywood Sign", "Venice Beach"],
    featuresDetails: {
        "Hollywood Sign": "A famous symbol of the film industry on Mount Lee, installed in 1923.",
        "Venice Beach": "A popular beach with a lively boardwalk, known for its shops and street performers."
      }
  },

  "Paris": {
    features: ["Eiffel Tower", "Louvre Museum"],
    featuresDetails: {
        "Eiffel Tower": "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars, named after the engineer Gustave Eiffel.",
        "Louvre Museum": "The Louvre Museum is the world's largest art museum and a historic monument in Paris, known for housing the Mona Lisa."
    }
  },
  "Tokyo": {
    features: ["Tokyo Tower", "Shibuya Crossing"],
    featuresDetails: {
        "Tokyo Tower": "Tokyo Tower is a communications and observation tower in the Shiba-koen district of Minato, Tokyo, inspired by the Eiffel Tower.",
        "Shibuya Crossing": "Shibuya Crossing is a famous scramble crossing in Tokyo, known for its large crowds and vibrant atmosphere."
    }
  },
  "Sydney": {
    features: ["Sydney Opera House", "Bondi Beach"],
    featuresDetails: {
        "Sydney Opera House": "The Sydney Opera House is a multi-venue performing arts centre in Sydney, recognizable for its distinctive sail-like design.",
        "Bondi Beach": "Bondi Beach is one of Australia's most famous beaches, known for its golden sands and excellent surfing conditions."
    }
  }

};

const cities = Object.keys(citiesData);

const App = () => {
  return (
    <Router>
      <CustomNavbar cities={cities} />
      <Routes>
        <Route path="/" element={<Home cities={cities} />} />
        <Route path="/city/:cityName" element={<City citiesData={citiesData} />} />
        <Route path="/city/:cityName/feature/:featureName" element={<CityFeature citiesData={citiesData} />} />
      </Routes>
    </Router>
  );
};

export default App;
