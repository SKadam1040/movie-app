// src/api/movieApi.js
import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchPopularMovies = () =>
  axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

export const fetchTopRatedMovies = () =>
  axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

export const fetchUpcomingMovies = () =>
  axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

export const fetchMovieDetails = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);

export const fetchMovieCredits = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);

export const fetchMovieSearch = (query) =>
  axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`);

export const getImageUrl = (path) => `${IMAGE_BASE_URL}${path}`;
