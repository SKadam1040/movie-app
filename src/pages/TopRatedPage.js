// src/pages/TopRatedPage.js
import React, { useEffect, useState } from 'react';
import { fetchTopRatedMovies } from '../api/movieApi';
import MovieList from '../components/movieList';

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTopRatedMovies().then((response) => setMovies(response.data.results));
  }, []);

  return (
    <div>
      <h2>Top Rated Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default TopRatedPage;
