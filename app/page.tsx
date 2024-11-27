import { getNowPlayingMovies } from "@/app/data/movie";

import { MovieList } from "@/components/movie-list";

export default async function HomePage() {
  const nowPlayingMovies = await getNowPlayingMovies();

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <MovieList />
    </main>
  );
}
