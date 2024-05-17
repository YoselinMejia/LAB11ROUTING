import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Home = ({ cities }) => {
  const query = new URLSearchParams(useLocation().search);
  const search = query.get('search') || '';
  const filteredCities = cities.filter(city => city.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container mt-3">
      <h1>Cities</h1>
      {filteredCities.map(city => (
        <Card key={city} className="mb-3">
          <Card.Body>
            <Card.Title>{city}</Card.Title>
            <Button variant="dark" as={Link} to={`/city/${city}`}>Explore</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
