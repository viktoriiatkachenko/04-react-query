import axios from 'axios';
import type { Movie } from '../types/movie';

export interface FetchMoviesResponse {
  results: Movie[];
  total_pages: number;
}

interface FetchMoviesParams {
  query: string;
  page: number;
}

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async ({
  query,
  page,
}: FetchMoviesParams): Promise<FetchMoviesResponse> => {
  const response = await axios.get<FetchMoviesResponse>(
    `${BASE_URL}/search/movie`,
    {
      params: {
        query,
        page,
        include_adult: false,
        language: 'en-US',
      },
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    }
  );

  return response.data;
};