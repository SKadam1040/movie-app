// src/components/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ movies }) => (
  <div className="movie-grid">
    {movies.map((movie) => (
      <div className="movie-card" key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3 className="movie-title">{movie.title}</h3>
        </Link>
        <p className="movie-rating">Rating: {movie.vote_average}</p>
      </div>
    ))}
  </div>
);

export default MovieList;
