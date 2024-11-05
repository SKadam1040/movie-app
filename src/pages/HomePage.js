// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { fetchPopularMovies, getImageUrl } from '../api/movieApi';
import MovieList from '../components/movieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then((response) => setMovies(response.data.results));
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
