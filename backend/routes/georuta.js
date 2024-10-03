import express from 'express';
import { addGeolocation, getGeolocations } from '../controllers/GeoController.js';

const router = express.Router();

// Ruta para agregar una nueva geolocalización
router.post('/location', addGeolocation);

// Ruta para obtener todas las geolocalizaciones
router.get('/locations', getGeolocations);

export default router;