import express from 'express';
import { getAllFarmaco, buscarFarmacos } from '../controllers/FarmacoController.js';
import { scrapeFarmaciasAhumada } from '../scraper/scraper.js';

const router = express.Router();

router.get('/', getAllFarmaco);
router.get('/buscar', buscarFarmacos);
router.get('/scrape', async (req, res) => {
    try {
        await scrapeFarmaciasAhumada();
        res.json({ message: 'Scraper ejecutado y datos guardados exitosamente.' });
    } catch (error) {
        console.error('Error en el scraper:', error);
        res.status(500).json({ message: 'Error al ejecutar el scraper.' });
    }
});

export default router;