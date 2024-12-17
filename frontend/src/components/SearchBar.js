import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = ({ setResults }) => {
    const [nombre, setNombre] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        const URI = 'http://localhost:8000/farmaco/buscar';
        try {
            const res = await axios.get(URI, {
                params: { nombre }
            });
            
            const sortedResults = res.data.sort((a, b) => {
                const priceA = parseFloat(a.precio_farmaco.replace(/\$|\./g, '').replace(',', '.')) || 0;
                const priceB = parseFloat(b.precio_farmaco.replace(/\$|\./g, '').replace(',', '.')) || 0;
                return priceA - priceB;
            });
            setResults(sortedResults);
        } catch (error) {
            console.error('Error al buscar fármacos:', error);
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Buscar por nombre de fármaco"
                className="form-control"
            />
            <button type="submit" className="btn btn-primary">Buscar</button>
        </form>
    );
};

export default SearchBar;