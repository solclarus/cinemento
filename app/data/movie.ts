import { baseUrl } from "@/config/api";
import { cache } from "react";

const fetchFromTMDB = async (endpoint: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("データ取得エラー:", error);
    return null;
  }
};

export const getNowPlayingMovies = cache(async () => {
  const data = await fetchFromTMDB("movie/now_playing");
  return data ? data.results : [];
});

export const getPopularMovies = cache(async () => {
  const data = await fetchFromTMDB("movie/popular");
  return data ? data.results : [];
});

export const searchMovies = cache(async (query: string) => {
  const data = await fetchFromTMDB(
    `search/movie?query=${encodeURIComponent(query)}&include_adult=false`
  );
  return data ? data.results : [];
});

export const getMovie = cache(async (id: string) => {
  return await fetchFromTMDB(`movie/${id}`);
});

export const getCasts = cache(async (id: string) => {
  const data = await fetchFromTMDB(`movie/${id}/credits`);
  return data ? data.cast.slice(0, 5) : [];
});
