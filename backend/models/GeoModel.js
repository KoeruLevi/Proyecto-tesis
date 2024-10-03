import db from "../database/db.js";
import { DataTypes } from "sequelize";


const GeoModel = db.define('geolocalizacion', {
    id_geolocalizacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'geolocalizacion',  
    timestamps: false              
});



export default GeoModel;