/* Se importa la conexión a la base de datos */
import db from "../database/db.js";

/* Se importa Sequalize */
import { DataTypes } from "sequelize";

/* Se construye el modelo */
const PrincipioModel = db.define('principio_activo', {
    id_pa: {type: DataTypes.INTEGER,
        primarykey: true,

    },
    nombre_pa: {type: DataTypes.STRING},
})

export default PrincipioModel