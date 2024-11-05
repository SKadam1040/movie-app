// src/pages/MovieDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieCredits, getImageUrl } from '../api/movieApi';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error('Error fetching movie details:', error));

    fetchMovieCredits(movieId)
      .then((response) => setCast(response.data.cast.slice(0, 10))) // Limit to 10 cast members
      .catch((error) => console.error('Error fetching movie credits:', error));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
      <p>{movie.overview}</p>
      <h3>Cast</h3>
      <ul>
        {cast.map((member) => (
          <li key={member.cast_id}>
            {member.name} as {member.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetailPage;
