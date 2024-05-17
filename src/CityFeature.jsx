import React from 'react';
import { useParams } from 'react-router-dom';

const CityFeature = ({ citiesData }) => {
  const { cityName, featureName } = useParams();
  const feature = citiesData[cityName].featuresDetails[featureName];

  return (
    <div className="container mt-3">
      <h1>{featureName}</h1>
      <p>{feature}</p>
    </div>
  );
};

export default CityFeature;
