import GeoModel from '../models/GeoModel.js';

// Controlador para agregar una nueva ubicación
export const addGeolocation = async (req, res) => {
    const { latitude, longitude } = req.body;

    try {
        // Crear una nueva entrada en la base de datos
        const newLocation = await GeoModel.create({ latitude, longitude });
        res.status(201).json({
            message: 'Ubicación almacenada con éxito',
            location: newLocation
        });
    } catch (error) {
        console.error('Error al guardar la ubicación:', error);
        res.status(500).json({ message: 'Error al guardar la ubicación' });
    }
};

// Controlador para obtener todas las ubicaciones
export const getGeolocations = async (req, res) => {
    try {
        // Obtener todas las ubicaciones desde la base de datos
        const locations = await GeoModel.findAll();
        res.status(200).json(locations);
    } catch (error) {
        console.error('Error al obtener las ubicaciones:', error);
        res.status(500).json({ message: 'Error al obtener las ubicaciones' });
    }
};