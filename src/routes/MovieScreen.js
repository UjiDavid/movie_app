import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = 'https://www.omdbapi.com?apikey=c9d6adc0';

const MovieScreen = () => {
  let { imdbID } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    movieSingle(imdbID);
  }, [imdbID]);

  const movieSingle = async (imdbId) => {
    const response = await fetch(`${API_URL}&i=${imdbId}`);
    const movie = await response.json();
    setMovieDetails(movie);
  };

  return (
    <div className="movies">
      {movieDetails ? (
        <>
          <div className="poster">
            <img src={movieDetails.Poster} alt={movieDetails.Title} />
          </div>
          <div className="content">
            <h1>
              {movieDetails.Title}
              <span> ({movieDetails.Year})</span>
              <span> {movieDetails.Rated}</span>
            </h1>
            <h2>Story Line:</h2>
            <p>{movieDetails.Plot}</p>
            <h2>Actors:</h2>
            <p>{movieDetails.Actors}</p>
            <h2>Genre:</h2>
            <p>{movieDetails.Genre}</p>
            <h2>Language:</h2>
            <p>{movieDetails.Language}</p>
            <h2>Released:</h2>
            <p>{movieDetails.Released}</p>
            <h2>Type:</h2>
            <p>{movieDetails.Type}</p>
            <h2>IMDB Rating:</h2>
            <p>{movieDetails.imdbRating}</p>
          </div>
        </>
      ) : (
        <h2>No Movies Found</h2>
      )}
    </div>
  );
};

export default MovieScreen;
