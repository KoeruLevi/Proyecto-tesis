# Proyecto-tesis
Proyecto de taller de desarrollo, prototipo de proyecto de título Héctor Toro
README para MediPrecio
Descripción del Proyecto
MediPrecio es una aplicación web diseñada para buscar y comparar precios de medicamentos en diferentes farmacias. La aplicación consta de un backend desarrollado en Node.js con Express y Sequelize para interactuar con una base de datos MySQL, y un frontend desarrollado en React.

Estructura del Proyecto
La estructura del proyecto está dividida en dos partes:

Frontend: Carpeta frontend

Framework: React
Estilización: Bootstrap
Enrutamiento: React Router
Librerías principales:
axios para realizar peticiones HTTP.
react-router-dom para manejo de rutas.
@react-google-maps/api para mapas interactivos (si es requerido).
Backend: Carpeta backend

Framework: Node.js con Express.
Base de datos: MySQL (usando mysql2).
ORM: Sequelize.
Librerías adicionales:
cors: Permite solicitudes desde dominios externos.
nodemon: Monitoriza cambios en el backend durante desarrollo.
puppeteer: Herramienta de scraping o manipulación de navegador.
Requisitos Previos
Asegúrate de tener instalados los siguientes programas en tu máquina:

Node.js y npm:
Puedes descargarlo desde nodejs.org.

MySQL Server:
Verifica que MySQL esté instalado y corriendo en el puerto por defecto (3306).

Servidor Apache:
Configurado para escuchar en el puerto 1652.

Instalación y Configuración
1. Clonar el repositorio
bash
Copiar código
git clone <url-del-repositorio>
cd <carpeta-del-proyecto>
2. Configuración del Backend
Instala las dependencias del backend:

bash
Copiar código
cd backend
npm install
Configura la conexión a la base de datos:
En tu archivo database.js (o equivalente), asegúrate de tener los siguientes datos:

javascript
Copiar código
const sequelize = new Sequelize('htoro_bd', 'htoro', 'hector2024', {
  host: 'localhost',
  dialect: 'mysql',
});
Inicia el servidor:

bash
Copiar código
npm run dev
El servidor estará disponible en http://localhost:3000 (o el puerto que hayas configurado).

3. Configuración del Frontend
Instala las dependencias del frontend:

bash
Copiar código
cd frontend
npm install
Compila y ejecuta el frontend en modo desarrollo:

bash
Copiar código
npm start
El frontend estará disponible en http://localhost:3000 en desarrollo. Para producción, se servirá a través de Apache en http://<IP-del-servidor>:1652.

Generar la versión para producción:

bash
Copiar código
npm run build
Scripts Disponibles
Frontend
npm start: Ejecuta la app en desarrollo.
npm run build: Compila la app para producción.
npm test: Ejecuta las pruebas.
Backend
npm run dev: Ejecuta el servidor con nodemon.
Uso
Asegúrate de que el servidor Apache está corriendo y sirviendo el frontend.
Inicia el backend en el puerto configurado (3000 por defecto).
Accede a la aplicación en http://<IP-del-servidor>:1652.
Dependencias Principales
Frontend
React
Bootstrap
React Router
Axios
Google Maps API (opcional)
Backend
Express
MySQL2
Sequelize
Cors
Nodemon
Puppeteer
Base de Datos
La base de datos utiliza MySQL con las siguientes credenciales:

Usuario: htoro
Contraseña: hector2024
Nombre de la Base de Datos: htoro_bd
Servidor Apache
Puerto: 1652
Servirá los archivos estáticos del frontend ubicados en /var/www/html.
Contribución
Si deseas contribuir, por favor:

Realiza un fork del repositorio.
Crea una rama con tu funcionalidad: git checkout -b nueva-funcionalidad.
Realiza un pull request cuando esté listo.

Licencia
Este proyecto está bajo la Licencia MIT.