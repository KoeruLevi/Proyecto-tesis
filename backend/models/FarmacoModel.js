
import db from "../database/db.js";


import { DataTypes } from "sequelize";
import FarmaciaModel from "./FarmaciaModel.js";
import LaboratorioModel from "./LaboratorioModel.js";


const FarmacoModel = db.define('farmaco', {
    id_farmaco: {type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre_farmaco: {type: DataTypes.STRING},
    mg_farmaco: {type: DataTypes.INTEGER},
    cant_farmaco: {type: DataTypes.INTEGER},
    precio_farmaco: {type: DataTypes.STRING},
    foto_farmaco: {type: DataTypes.STRING},
},{
    tableName: 'farmaco',
    timestamps: false
})

FarmacoModel.belongsTo(FarmaciaModel, { as: 'farmacia', foreignKey: 'id_farmacia' });
FarmacoModel.belongsTo(LaboratorioModel, { as: 'laboratorio', foreignKey: 'id_lab' });


export default FarmacoModel