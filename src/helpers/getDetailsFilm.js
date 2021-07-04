
export const getDetailsFilm = async(id) => {
    try {
    const url = `https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`
    const resp = await fetch(url);
    const data = await resp.json();


    return data;

    } catch (error) {
        console.error(error.toString);
        
    }
    
}

export const getDetailsFilmVideo = async(id) => {
    try {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API2_KEY}&language=en-US`
    const resp = await fetch(url);
    const data = await resp.json();


    return data;

    } catch (error) {
        console.error(error.toString);
        
    }
    
}