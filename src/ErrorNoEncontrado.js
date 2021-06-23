import React from "react";

export const ErrorNoEncontrado = () => {
  return (
    <div className="col-span-3 flex justify-center 	">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow   v overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0"></div>
          <div className="p-7 ">
            <div className="uppercase font-black tracking-wide text-3xl	pb-1.5 text-indigo-500 font-semibold">
              Pelicula no encontrada
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};
