import React, { useState } from 'react';
import './Geo.css';  // Asegúrate de que la ruta sea correcta

const Geo = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // Función para obtener la geolocalización del usuario
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          sendLocationToServer(latitude, longitude);
        },
        (err) => {
          setError('Error obteniendo la ubicación: ' + err.message);
        }
      );
    } else {
      setError('La geolocalización no está soportada por este navegador.');
    }
  };

  // Función para enviar la geolocalización al backend
  const sendLocationToServer = async (latitude, longitude) => {
    try {
      const response = await fetch('http://localhost:8000/geolocalizacion/location', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latitude, longitude }),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage(data.message); // Muestra el mensaje del backend
      } else {
        setError('Error al enviar la ubicación.');
      }
    } catch (err) {
      setError('Error al enviar la ubicación: ' + err.message);
    }
  };

  return (
    <div className="geo-container">
      <h2>Geolocalización</h2>
      <button className="geo-button" onClick={getLocation}>Obtener Ubicación</button>
      
      
      {location.lat && location.lon ? (
        <p className="geo-coordinates">Latitud: {location.lat}, Longitud: {location.lon}</p>
      ) : (
        <p className="geo-error">{error}</p>
      )}
      
      
      {responseMessage && <p className="geo-message">{responseMessage}</p>}
    </div>
  );
};

export default Geo;