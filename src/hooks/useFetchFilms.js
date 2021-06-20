import { useEffect, useState } from "react";
import { getFilms } from "../helpers/getFilms";



export const useFetchFilms = ( busqueda ) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect( () => {

        getFilms(busqueda)
        .then( films =>{
            setState({
                data:films,
                loading:false
            })
        })

    },[busqueda])

  

    return state;
}
