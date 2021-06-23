import React, { useState } from "react";
import { Buscador } from "./Buscador";
import { useFetchFilms } from "./hooks/useFetchFilms";
import { TarjetaPelicula } from "./TarjetaPelicula";
import { ErrorNoEncontrado } from "./ErrorNoEncontrado";
import { Cargando } from "./Cargando";

export const App = () => {
  const [busqueda, setBusqueda] = useState("");
  const { data: films, loading } = useFetchFilms(busqueda);

  console.log(films); 
  return (
    <div class="container mx-auto min-h-screen min-w-full bg-gradient-to-r from-purple-800 via-purple-300 to-purple-900	 shadow md:shadow-lg">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-start-2 col-span-1 flex justify-center"></div>
        <div class="col-span-3 ">
          <Buscador setBusqueda={setBusqueda} />
          {loading && <Cargando/>}
        </div>
        
        {films.hasOwnProperty("Search") ? films.Search.map((pelicula) => <TarjetaPelicula datos={pelicula} />) :  <ErrorNoEncontrado />}
      </div>
    </div>
  );
};
