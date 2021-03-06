
export const getFilms = async(busqueda, pages) => {
    try {
    const url = `https://www.omdbapi.com/?s=${busqueda}&apikey=${process.env.REACT_APP_API_KEY}&page=${pages}`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;

    } catch (error) {
        console.error(error.toString);
        
    }
    
}
