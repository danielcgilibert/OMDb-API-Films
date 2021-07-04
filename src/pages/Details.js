import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailsFilm } from '../helpers/getDetailsFilm';
import { Cargando } from "../components/Cargando/Cargando";
import { TarjetaDetalles } from "../components/TarjetaDetalles/TarjetaDetalles";

export const Details = () => {
    const { id } = useParams();

    
    const [detalles, setDetalles] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        getDetailsFilm(id).then((pelicula) => {
            setDetalles(pelicula);
            setLoading(false);
            
        })
    }, [])
    
    return (
        <div className="container mx-auto min-h-screen min-w-full bg-gradient-to-r from-purple-800 via-purple-300 to-purple-900	 shadow md:shadow-lg">
            {
                loading ? <Cargando /> : <TarjetaDetalles detalles={detalles} />
            }
        </div>
    )
}
