import express from 'express';
import db from '../database/db.js';

const router = express.Router();

router.get('/test-db-connection', async (req, res) => {
    try {
        await db.authenticate();
        res.json({ message: 'Conexion exitosa a la BBDD' });
    } catch (error) {
        res.status(500).json({ message: 'Error de conexión a la BBDD', error: error.message });
    }
});

export default router;

import TestRoutes from './routes/testRoutes.js'; 

app.use('/api', TestRoutes);