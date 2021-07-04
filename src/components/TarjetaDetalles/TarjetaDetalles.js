import React from "react";

export const TarjetaDetalles = ({ detalles }) => {
  console.log(detalles);

  const { Title, Poster } = detalles;
  return (
    <div className="grid justify-items-center text-center	">
      <div className="w-10/12	 min-h-screen shadow-2xl bg-white	rounded-lg ">
        <div class="text-center ">
          <h1 className="text-5xl m-5 "> {Title} </h1>
          <img src={Poster}  className="mx-auto rounded-lg shadow-2xl" alt="Girl in a jacket" width="300" height="600" />
        </div>
      </div>
    </div>
  );
};
