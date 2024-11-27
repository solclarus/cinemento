import { getPopularMovies } from "@/app/data/movie";
import { MovieListCard } from "@/components/movie-list-card";
import { Movie } from "@/types/movie";

export default async function Popular() {
  const movies = await getPopularMovies();

  return (
    <main className="p-4">
      <h2 className="text-2xl font-semibold mb-4">人気の映画</h2>
      <div className="grid-list">
        {movies.map((movie: Movie) => (
          <MovieListCard key={movie.id} {...movie} />
        ))}
      </div>
    </main>
  );
}
