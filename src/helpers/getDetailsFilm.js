
export const getDetailsFilm = async(id) => {
    try {
    const url = `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`
    const resp = await fetch(url);
    const data = await resp.json();


    return data;

    } catch (error) {
        console.error(error.toString);
        
    }
    
}
