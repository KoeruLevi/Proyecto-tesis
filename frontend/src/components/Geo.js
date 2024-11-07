import React, { useState } from 'react';
import './Geo.css';
import GeoMap from './GeoMap'; 

const Geo = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
        },
        (err) => {
          setError('Error obteniendo la ubicación: ' + err.message);
        }
      );
    } else {
      setError('La geolocalización no está soportada por este navegador.');
    }
  };

  return (
    <div className="geo-container">
      <h2>Geolocalización</h2>
      <button className="geo-button" onClick={getLocation}>Obtener Ubicación</button>
      
      
      {location.lat && location.lon ? (
        <>
          <p className="geo-coordinates">Latitud: {location.lat}, Longitud: {location.lon}</p>
          <GeoMap lat={location.lat} lon={location.lon} /> 
        </>
      ) : (
        <p className="geo-error">{error}</p>
      )}
      
      {responseMessage && <p className="geo-message">{responseMessage}</p>}
    </div>
  );
};

export default Geo;