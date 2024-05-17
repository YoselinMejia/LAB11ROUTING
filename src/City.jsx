import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const City = ({ citiesData }) => {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const city = citiesData[cityName];

  return (
    <div className="container mt-3">
      <h1>{cityName}</h1>
      {city.features.map(feature => (
        <Button
          key={feature}
          className="mr-2 mb-2"
          variant="dark"
          onClick={() => navigate(`/city/${cityName}/feature/${feature}`)}
        >
          {feature}
        </Button>
      ))}
    </div>
  );
};

export default City;
