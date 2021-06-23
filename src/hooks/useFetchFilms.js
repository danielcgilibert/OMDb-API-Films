import { useEffect, useState } from "react";
import { getFilms } from "../helpers/getFilms";

export const useFetchFilms = (busqueda) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    });
    setTimeout(function () {
      getFilms(busqueda).then((films) => {
        setState({
          data: films,
          loading: false,
        });
      });
    }, 3000);
  }, [busqueda]);

  return state;
};
