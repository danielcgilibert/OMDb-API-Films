import React from "react";

export const TarjetaPelicula = (films) => {
  const { Title, Year,imdbID,Type, Poster } = films.datos;
  console.log(films);
  return (
    <div className="col-span-3 flex justify-center " key={imdbID}>
      <div className="max-w-md mx-auto  w-full bg-white rounded-xl shadow   v overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <img
              className="h-full  w-full object-cover md:w-48"
              src={Poster}
              alt="imagen portada"
            />
          </div>
          <div className="p-7 w-full">
            <div className="uppercase font-black tracking-wide text-3xl	pb-1.5 text-indigo-500 font-semibold">
              {Title}
            </div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"></p>

            <p className="block mt-1 text-lg leading-tight font-small text-black hover:underline">
              <i class="far fa-calendar-alt pr-1.5"></i>
              {Year}
            </p>
            <button class="bg-blue-500 hover:bg-blue-700 transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 text-white font-bold mt-32 py-2 w-full rounded">
              Detalles
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};
