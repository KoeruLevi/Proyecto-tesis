# Proyecto-tesis
Proyecto de taller de desarrollo, prototipo de proyecto de título Héctor Toro
README para MediPrecio
Descripción del Proyecto
MediPrecio es una aplicación web diseñada para buscar y comparar precios de medicamentos en diferentes farmacias. La aplicación consta de un backend desarrollado en Node.js con Express y Sequelize para interactuar con una base de datos MySQL, y un frontend desarrollado en React.

Requisitos Previos
Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes requisitos:


Node.js y npm: Descargar Node.js
MySQL: Descargar MySQL


Instalación y Ejecución


Backend

Clona el repositorio:

En git.bash:

git clone https://github.com/KoeruLevi/mediprecio.git



cd backend
--
.

Instala las dependencias:

En git.bash:

npm install
--
.


Ejecuta las migraciones:

En git.bash:

npx sequelize-cli db:migrate
--
.

Inicia el servidor:

En git.bash:

npm start
--
.

El servidor backend debería estar corriendo en 146.83.198.35:1652

Frontend
Navega al directorio del frontend:

En git.bash:

cd frontend
--
.

Instala las dependencias:

En git.bash:

npm install
--
.

Inicia la aplicación:

En git.bash:

npm start
--


.

Uso de la Aplicación
Página de Inicio:


Buscar Fármacos:

Usa la barra de búsqueda para encontrar fármacos por nombre o principio activo.
Listar Farmacias:

Haz clic en "Ver Todas las Farmacias" para ver una lista de todas las farmacias registradas.
Ver Detalles de una Farmacia:

Haz clic en "Mostrar farmacia" en la lista de farmacias para ver detalles específicos de una farmacia.
Estructura del Proyecto

Backend:

Controladores: Gestionan la lógica de negocio.
Modelos: Definen la estructura de la base de datos.
Rutas: Definen los endpoints de la API.
Configuración de la Base de Datos: database/db.js.

Frontend:

Componentes: Componentes React para la interfaz de usuario.
Estilos: Archivos CSS para el diseño y la estética.
Rutas: Definen la navegación de la aplicación.
Contribuciones
Si deseas contribuir a este proyecto, por favor, abre un pull request o reporta problemas en el repositorio.

Licencia
Este proyecto está bajo la Licencia MIT.