import puppeteer from 'puppeteer';
import FarmacoModel from '../models/FarmacoModel.js';
import FarmaciaModel from '../models/FarmaciaModel.js';

async function scrapeFarmaciasAhumada() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const searchURL = 'https://www.farmaciasahumada.cl/search/?q=paracetamol';
    await page.goto(searchURL, { waitUntil: 'networkidle2' });

    const productos = await page.evaluate(() => {
        const productCards = document.querySelectorAll('.product-card');
        let results = [];
        productCards.forEach((card) => {
            const title = card.querySelector('.product-card__name')?.innerText || 'N/A';
            const price = card.querySelector('.price')?.innerText || 'N/A';
            results.push({ title, price });
        });
        return results;
    });

    await browser.close();

    try {
        for (let producto of productos) {
            console.log(`Guardando producto: ${producto.title} - ${producto.price}`);
            await FarmacoModel.create({
                nombre_farmaco: producto.title,
                precio_farmaco: producto.price,
                id_farmacia: 1,
                mg_farmaco: null,
                cant_farmaco: 1,
                foto_farmaco: ''
            });
        }
        console.log('Datos guardados exitosamente.');
    } catch (error) {
        console.error('Error al insertar datos:', error);
    }
}
export { scrapeFarmaciasAhumada };