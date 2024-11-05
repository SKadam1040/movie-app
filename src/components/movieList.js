// src/components/MovieList.js
import React from 'react';
import MovieCard from './movieCard';

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);

export default MovieList;
