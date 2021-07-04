import React from "react";

export const TarjetaDetalles = ({ detalles, detallesVideo }) => {
  const { Title, Poster, Director, Genre, Metascore, Production, Ratings } = detalles;
  const { results } = detallesVideo;
  console.log(detalles);
  return (
    <div className=" m-auto	 w-10/12 min-h-screen  shadow-2xl bg-white	rounded-lg ">
      <div class="grid grid-cols-6 gap-4 justify-items-center  ">
        <div class="col-start-2 col-span-4 ">
          
          <h1 className="text-5xl m-5 "> {Title} </h1>
        </div>

        <div class="col-start-2 col-span-1 ">
          <img
            src={Poster}
            className="mx-auto rounded-lg shadow-2xl"
            alt="Girl in a jacket"
            width="300"
            height="600"
          />
        </div>

        <div class="col-span-2 w-11/12 text-1xl  ">
          <ul>
            <li className="mt-3">
              <ul>
              <i class="fas fa-video"></i> Director
                <li className="pl-3">{Director}</li>
              </ul>
            </li>

            <hr />

            <li className="mt-3">
              <ul>
              <i class="fas fa-list-alt"></i> Genre<li className="pl-3">{Genre}</li>
              </ul>
            </li>

            <hr />

            <li className="mt-3">
              <ul>
                <p> <i class="fas fa-star-half-alt"></i> Metascore {Metascore} </p>
                <p className="pl-3"> <i class="fas fa-caret-down"></i> Premios  </p>
                <hr/>
                  {Ratings.map((rating) => <h1 className="pl-4"> <i className="fas fa-angle-right"></i> {rating.Source} {rating.Value} </h1>)}
              </ul>
            </li>

            <hr />

            <li className="mt-3">
              <ul>
              <i class="fas fa-bullhorn"></i> Production<li className="pl-3"> {Production} </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="col-span-6 m-10 ">
          {results === undefined || results.length === 0 ? (
            "No se a encontrado un video : ("
          ) : (
            <div>

              <h1> <i class="fab fa-youtube"></i> Trailer</h1>
              <iframe
                width="1300"
                height="400"
                src={`https://www.youtube-nocookie.com/embed/${results[0].key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
