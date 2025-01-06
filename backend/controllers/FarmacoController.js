import FarmaciaModel from '../models/FarmaciaModel.js';
import FarmacoModel from '../models/FarmacoModel.js';
import LaboratorioModel from '../models/LaboratorioModel.js';

import { Op } from 'sequelize';




/* Método para buscar fármacos */
export const buscarFarmacos = async (req, res) => {
    try {
        const { nombre, principioActivo } = req.query;
        let whereClause = {};

        if (nombre) {
            whereClause.nombre_farmaco = { [Op.like]: `%${nombre}%` };
        }

        if (principioActivo) {
            const principios = await PrincipioModel.findAll({
                where: {
                    nombre_pa: { [Op.like]: `%${principioActivo}%` }
                }
            });

            if (principios.length > 0) {
                whereClause.id_pa = {
                    [Op.in]: principios.map(principio => principio.id_pa)
                };
            } else {
                return res.status(404).json({ message: 'No se encontraron principios activos.' });
            }
        }

        const farmacos = await FarmacoModel.findAll({
            where: whereClause,
            include: [
                { model: FarmaciaModel, as: 'farmacia' },
                { model: LaboratorioModel, as: 'laboratorio' }
            ]
        });

        if (farmacos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron fármacos.' });
        }

        res.json(farmacos);
    } catch (error) {
        console.error('Error al buscar fármacos:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

/* Método para mostrar todos los fármacos */
export const getAllFarmaco = async (req, res) => {
    try {
        const farmacos = await FarmacoModel.findAll({
            include: [
                { model: FarmaciaModel, as: 'farmacia' },
                { model: LaboratorioModel, as: 'laboratorio' },
                { model: PrincipioModel, as: 'principio' }
            ]
        });

        if (farmacos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron fármacos.' });
        }

        res.json(farmacos);
    } catch (error) {
        console.error('Error al obtener todos los fármacos:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};