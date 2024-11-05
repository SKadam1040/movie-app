// src/pages/UpcomingPage.js
import React, { useEffect, useState } from 'react';
import { fetchUpcomingMovies } from '../api/movieApi';
import MovieList from '../components/movieList';

const UpcomingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchUpcomingMovies()
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error('Error fetching upcoming movies:', error));
  }, []);

  return (
    <div>
      <h2>Upcoming Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default UpcomingPage;
