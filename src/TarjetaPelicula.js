import React from "react";

export const TarjetaPelicula = (films) => {
  const { Title, Year, Metascore, Plot, Poster } = films.datos;

  return (
    <div class="col-span-3 flex justify-center">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow   v overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-48 w-full object-cover md:w-48"
              src={Poster}
              alt="Man looking at item at a store"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {Title}
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              {" "}
              {Year}{" "}
            </a>

            <p
              href="#"
              class="block mt-1 text-lg leading-tight font-small text-black hover:underline"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                />
              </svg>
              MetaScore {Metascore}{" "}
            </p>

            <p class="mt-2 text-gray-500"> {Plot} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
