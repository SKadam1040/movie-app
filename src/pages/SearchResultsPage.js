// src/pages/SearchResultsPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovieSearch } from '../api/movieApi';
import MovieList from '../components/movieList';

const SearchResultsPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query) {
      fetchMovieSearch(query)
        .then((response) => setMovies(response.data.results))
        .catch((error) => console.error('Error fetching search results:', error));
    }
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchResultsPage;
