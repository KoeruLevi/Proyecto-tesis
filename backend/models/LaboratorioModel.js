/* Se importa la conexión a la base de datos */
import db from "../database/db.js";

/* Se importa Sequalize */
import { DataTypes } from "sequelize";

/* Se construye el modelo */
const LaboratorioModel = db.define('laboratorio', {
    id_lab: {type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre_lab: {type: DataTypes.STRING},
},{
    tableName: 'laboratorio',
    timestamps: false
})

export default LaboratorioModel