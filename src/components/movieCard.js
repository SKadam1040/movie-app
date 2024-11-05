// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../api/movieApi';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <Link to={`/movie/${movie.id}`}>
      <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
      <h3>{movie.title}</h3>
    </Link>
  </div>
);

export default MovieCard;
