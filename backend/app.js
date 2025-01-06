import express from "express";
import cors from 'cors'
import db from "./database/db.js";
import FarmaRoutes from './routes/routes.js'
import FarmaciaRoutes from './routes/FarmaciaRoutes.js'
import GeoRoutes from './routes/georuta.js';

const app = express()
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())
app.use('/farmaco', FarmaRoutes)
app.use('/farmacia', FarmaciaRoutes)
app.use('/geolocalizacion', GeoRoutes);

try {
    await db.authenticate()
    console.log('Conexion exitosa a la BBDD')

   
} catch (error) {
    console.log(`El error de conexión es: ${error}`),
    console.error('Detalles del error:', error);
}

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});



