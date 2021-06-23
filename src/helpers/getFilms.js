
export const getFilms = async(busqueda) => {
    try {
    const url = `http://www.omdbapi.com/?s=${busqueda}&apikey=${process.env.REACT_APP_API_KEY}`;
    const resp = await fetch(url);
    const data = await resp.json();

    // const films = data.map(film => {
    //     return { 
    //         title: film.Title,
    //         year: film.year,
    //         poster: film.Poster
    //     } 
    // })

    return data;

    } catch (error) {
        console.error(error.toString);
        
    }
    

   



}
