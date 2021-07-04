import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsFilm, getDetailsFilmVideo } from "../helpers/getDetailsFilm";
import { Cargando } from "../components/Cargando/Cargando";
import { TarjetaDetalles } from "../components/TarjetaDetalles/TarjetaDetalles";

export const Details = () => {
  const { id } = useParams();

  const [detalles, setDetalles] = useState([]);
  const [detallesVideo, setDetallesVideo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    getDetailsFilm(id).then((datosPelicula) => {
        setDetalles(datosPelicula);
    }).then(() => {
        getDetailsFilmVideo(id).then((datosVideoPelicula) => {
            setDetallesVideo(datosVideoPelicula);
            setLoading(false);
        });
    });

    
    
  }, []);

  return (
    <div className="container mx-auto min-h-screen min-w-full bg-gradient-to-r from-purple-800 via-purple-300 to-purple-900	 shadow md:shadow-lg">
      {loading ? (
        <Cargando />
      ) : (
        <TarjetaDetalles detalles={detalles} detallesVideo={detallesVideo} />
      )}
    </div>
  );
};
