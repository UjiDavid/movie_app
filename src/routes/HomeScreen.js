import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MovieCard } from '../MovieCard';

import SearchIcon from '../search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=c9d6adc0';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies('Marvel');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setIsLoading(false);
    setMovies(data.Search);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    searchMovies(searchTerm);
  };

  if (isLoading === true) {
    return (
      <div className="movies">
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className="app">
      <form className="search" onSubmit={submitHandler}>
        <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">
          <img src={SearchIcon} alt="search" />
        </button>
      </form>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
