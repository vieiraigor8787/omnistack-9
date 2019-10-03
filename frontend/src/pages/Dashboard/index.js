import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styless.css'

export default function Dashboard() {
    const [spots, setSpots] = useState([])

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user')
            const response = await api.get('/dashboard', {
                headers: { user_id }
            })  

            // console.log(response.data)
            setSpots(response.data)
        }

        loadSpots()
    }, [])
    // array vazio vai executar apenas uma vez - useEffect 

    return (
      <>
        <ul className="spot-list">
            {spots.map(spot => (
                <li key={spot._id}>
                    <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                    <strong>{spot.company}</strong>  <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
                </li>
            ))}
        </ul>

        <Link to="/new">
            <button className="btn">Cadastrar novo Spot</button>
        </Link>
      </>
    )
}

