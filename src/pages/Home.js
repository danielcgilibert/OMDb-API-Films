import React, { useEffect, useState } from "react";

import { getFilms } from "../helpers/getFilms";

import { Buscador } from "../components/Buscador/Buscador";
import { TarjetaPelicula } from "../components/TarjetaPelicula/TarjetaPelicula";
import { ErrorNoEncontrado } from "../components/ErrorNoEncontrado/ErrorNoEncontrado";
import { Cargando } from "../components/Cargando/Cargando";
import { BotonCargarMas } from "../components/botonCargarMas/BotonCargarMas";


export const Home = () => {
  const [busqueda, setBusqueda] = useState("");
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1)


  useEffect(() => {
    setPage(1)
  }, [busqueda])

  useEffect(() => {
    if(busqueda.length > 0){
      setLoading(true);
      getFilms(busqueda,page).then((films) => {
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
  }, [busqueda,page])
  
 

  


  return (
    <div className="container mx-auto min-h-screen min-w-full bg-gradient-to-r from-purple-800 via-purple-300 to-purple-900	 shadow md:shadow-lg">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-start-2 col-span-1 flex justify-center"></div>
        <div className="col-span-3 ">
          <Buscador setBusqueda={setBusqueda} />
          {
            loading && <Cargando />
          }
        </div>
        
        {loading ? "" : error ? <ErrorNoEncontrado /> : (films.map((pelicula) => <TarjetaPelicula datos={pelicula}  key={pelicula.imdbID} /> ))}

        {films.length > 0 && loading===false && error===false  && <BotonCargarMas setPage={setPage} page={page} />}
      

      </div>
    </div>
  );
};
