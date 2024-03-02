import React, { useEffect, useState } from 'react';
import Movie_List from './Pages/Movie_List';
import Movie_Heading from './Pages/Movie_Heading';
import Search_Box from './Pages/Search_Box';
import Add_Fave from './Pages/Add_Fave';
import Remove_Fave from './Pages/Remove_Fave';
import "bootstrap/dist/css/bootstrap.min.css";

function Movies_Holder() {
  const [Movies, setMovies] = useState([]);
  const [Search, setSearch] = useState("");
  const [Favorite, setFavorite] = useState([]);

  const getMovieRequest = async (search) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=c796c833`);
      const responseJson = await response.json();

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieRequest(Search);
  }, [Search]);

  useEffect(() => {
    const MovieFavorite = JSON.parse(localStorage.getItem("Your Favorites"));
    if (MovieFavorite) {
      setFavorite(MovieFavorite);
    }
  }, []);

  function SaveToLocalStorage(items) {
    localStorage.setItem("Your Favorites", JSON.stringify(items));
  }

  const addFavoriteChosen = (movie) => {
    const newFavoriteList = [...Favorite, movie];
    setFavorite(newFavoriteList);
    SaveToLocalStorage(newFavoriteList);
  };

  const removeFavoriteChosen = (movie) => {
    const newFavoriteList = Favorite.filter(
      (favoriteMovie) => favoriteMovie.imdbID !== movie.imdbID
    );
    setFavorite(newFavoriteList);
    SaveToLocalStorage(newFavoriteList);
  };

  return (
    <div className='App container-fluid file-css'>
      <div className='row d-flex align-items-center mb-4'>
        <Movie_Heading heading={"Movies"} />
        <Search_Box Search={Search} setSearch={setSearch} />
      </div>
      <div className='row'>
        <Movie_List Movies={Movies} Add_Fave={Add_Fave} favoriteChosen={addFavoriteChosen} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4 my-favorite'>
        <Movie_Heading heading={"Your Favorite Movies"} />
      </div>
      <div className='row'>
        <Movie_List Movies={Favorite} Add_Fave={Remove_Fave} favoriteChosen={removeFavoriteChosen} />
      </div>
    </div>
  );
}
export default Movies_Holder
