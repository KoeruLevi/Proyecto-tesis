import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import './CompShowFarmacos.css';

const CompShowFarmacos = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        getAllFarmacos();
    }, []);

    const getAllFarmacos = async () => {
        const URI = 'http://localhost:8000/farmaco/todos';
        try {
            const res = await axios.get(URI);
            
            const sortedResults = res.data.sort((a, b) => {
                const priceA = parseFloat(a.precio_farmaco.replace(/\$|\./g, '').replace(',', '.')) || 0;
                const priceB = parseFloat(b.precio_farmaco.replace(/\$|\./g, '').replace(',', '.')) || 0;
                return priceA - priceB;
            });
            setResults(sortedResults);
        } catch (error) {
            console.error('Error al obtener todos los fármacos:', error);
        }
    };

    return (
        <div className='container'>
            <SearchBar setResults={setResults} />
            <div className='row'>
                <div className='col'>
                    <table className='table table-striped table-hover'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Foto</th>
                                <th>Nombre del Fármaco</th>
                                <th>Nombre de la Farmacia</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.length > 0 ? (
                                results.map((farmaco) => (
                                    <tr key={farmaco.id_farmaco}>
                                        <td>
                                            <img
                                                src={farmaco.foto_farmaco || 'https://via.placeholder.com/50'}
                                                alt={farmaco.nombre_farmaco}
                                                width="50"
                                                height="50"
                                            />
                                        </td>
                                        <td>{farmaco.nombre_farmaco}</td>
                                        <td>{farmaco.farmacia?.nombre_farmacia || 'N/A'}</td>
                                        <td>{farmaco.precio_farmaco}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No se encontraron resultados.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompShowFarmacos;