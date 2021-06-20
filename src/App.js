import React, { useEffect, useState } from "react";
import { Buscador } from "./Buscador";
import { useFetchFilms } from "./hooks/useFetchFilms";
import { TarjetaPelicula } from "./TarjetaPelicula";

export const App = () => {
  const [busqueda, setBusqueda] = useState("");
  const { data: films, loading } = useFetchFilms(busqueda);
  console.log(films);
  return (
    <div class="container mx-auto min-h-screen min-w-full bg-purple-700	 shadow md:shadow-lg">
      <div class="grid grid-cols-3 gap-4">
        <div class="col-start-2 col-span-1 flex justify-center">Menu</div>
        <div class="col-span-3 ">
          <Buscador setBusqueda={setBusqueda} />
        </div>
        {loading && <h1>Hola</h1>}

        {films.hasOwnProperty('Title') && <TarjetaPelicula datos={films} />}
      </div>
    </div>
  );
};
