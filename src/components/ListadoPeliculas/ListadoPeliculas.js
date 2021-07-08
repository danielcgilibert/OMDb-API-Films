import React from "react";
import { TarjetaPelicula } from "../TarjetaPelicula/TarjetaPelicula";

export const ListadoPeliculas = ({ films, page, login, setLogin }) => {
  const handleLoggout = () => {
    setLogin({ usuario: {}, loggin: false });
  }
  console.log(login.usuario);
  return (
    <>
            <div className="col-start-2">
        </div>

      {films.length > 0 && (
        <div className="col-start-3 w-6/12 ">
          <div class=" animate__animated animate__bounceInDown w-full 		 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
           <p className="text-center">Página {page} </p> 
          </div>
          <br />
          <div class=" animate__animated animate__bounceInDown w-8/12  bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-r-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                  <p className="text-left"> Hola  <i class="fas fa-hand-sparkles"></i> <br/>{login.usuario.email || login.usuario.profile.name}  </p> 

            </div>

          <button 
          onClick={handleLoggout}
          class="animate__animated animate__bounceInDown w-6/12 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
            Cerrar Sesión
          </button>
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
