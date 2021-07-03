import React, { useEffect, useState } from "react";

import { getFilms } from "./helpers/getFilms";

import { Buscador } from "./components/Buscador/Buscador";
import { TarjetaPelicula } from "./components/TarjetaPelicula/TarjetaPelicula";
import { ErrorNoEncontrado } from "./components/ErrorNoEncontrado/ErrorNoEncontrado";
import { Cargando } from "./components/Cargando/Cargando";

export const App = () => {
  const [busqueda, setBusqueda] = useState("");
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false);

  useEffect(() => {
    if(busqueda.length > 0){
      setLoading(true);
      getFilms(busqueda).then((films) => {
        console.log(films);
        if(films.hasOwnProperty("Search")){
          setFilms(films.Search)
          setLoading(false)
          setError(false);
        }else{
          setLoading(false)
          setError(true);
        }
      })
    }
  }, [busqueda])
  


  return (
    <div class="container mx-auto min-h-screen min-w-full bg-gradient-to-r from-purple-800 via-purple-300 to-purple-900	 shadow md:shadow-lg">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-start-2 col-span-1 flex justify-center"></div>
        <div class="col-span-3 ">
          <Buscador setBusqueda={setBusqueda} />
          {
            loading && <Cargando />
          }
        </div>
        {
          loading ? "" : error ? <ErrorNoEncontrado /> : films.map((pelicula) => <TarjetaPelicula datos={pelicula} /> )
        }

      </div>
    </div>
  );
};
