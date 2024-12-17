import puppeteer from 'puppeteer';
import FarmacoModel from '../models/FarmacoModel.js';

async function scrapeFarmaciasAhumada() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const searchURL = 'https://www.farmaciasahumada.cl/search/?q=paracetamol';
    await page.goto(searchURL, { waitUntil: 'networkidle2' });

    let hasNextPage = true; // Controla la paginación

    while (hasNextPage) {
        // Extraer los productos de la página actual
        const productos = await page.evaluate(() => {
            let results = [];
            const productCards = document.querySelectorAll('.col-6.col-sm-4.col-lg-3');

            productCards.forEach((card) => {
                const title = card.querySelector('.pdp-link')?.innerText.trim() || 'N/A';
                const price = card.querySelector('.value.d-flex.align-items-center')?.innerText.trim() || 'N/A';
                const image = card.querySelector('.image-container img')?.src || '';
                results.push({ title, price, image });
            });
            return results;
        });

        console.log('Productos extraídos en esta página:', productos);

        // Guardar los productos en la base de datos
        for (let producto of productos) {
            await FarmacoModel.create({
                nombre_farmaco: producto.title,
                precio_farmaco: producto.price,
                id_farmacia: 1, // ID de Farmacias Ahumada
                id_lab: 1,      // ID del laboratorio de prueba
                mg_farmaco: null,
                cant_farmaco: 1,
                foto_farmaco: producto.image
            });
        }

        // Intentar hacer clic en el botón de "Mostrar más resultados"
        hasNextPage = await page.evaluate(() => {
            const button = document.querySelector('button[data-page-number]'); // Ajusta el selector
            if (button) {
                button.click();
                return true;
            }
            return false;
        });

        // Esperar un tiempo para que los nuevos resultados carguen
        if (hasNextPage) {
            await page.waitForTimeout(3000); // Esperar 3 segundos (ajústalo si es necesario)
        }
    }

    console.log('Todos los productos han sido extraídos.');
    await browser.close();
}

export { scrapeFarmaciasAhumada };