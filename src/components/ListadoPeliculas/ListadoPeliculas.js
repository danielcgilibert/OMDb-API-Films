import React from "react";
import { TarjetaPelicula } from "../TarjetaPelicula/TarjetaPelicula";

export const ListadoPeliculas = ({ films, page }) => {
  return (
    <>
    {films.length > 0 && (
      <div className="col-start-3">
      <div class=" animate__animated animate__bounceInDown bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
        Página {page}
      </div>
    </div>
    )}
      

      <div className="col-span-3 ">
        {films.map((pelicula) => (
          <TarjetaPelicula datos={pelicula} key={pelicula.imdbID} />
        ))}
      </div>
    </>
  );
};
