import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GeoMap = ({ lat, lon }) => {
  
  const mapCenter = { lat, lng: lon };

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const mapOptions = {
    zoom: 15
  };

  const customIcon = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png", // URL del ícono personalizado
    size: { width: 20, height: 32 },  // Tamaño del ícono
    origin: { x: 0, y: 0 },  // Punto de origen del ícono (esquina superior izquierda)
    anchor: { x: 0, y: 32 }  // Ancla del ícono (base del marcador)
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCe8rLP5yMqXdPjzxWFDSodkPnHbriImeU"> 
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={mapOptions.zoom}
      >   
        {lat && lon && (
          <Marker
            position={mapCenter}
            icon={customIcon}  // Añadir el ícono personalizado al marcador
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GeoMap;