import { getMovie } from "@/app/data/movie";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MovieDetails } from "@/types/tmdb/movie";
import { CalendarDays, Clock, DollarSign, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Detail({ params }: { params: { id: string } }) {
  const movie: MovieDetails = await getMovie(params.id);

  return (
    <main>
      {movie.backdrop_path && (
        <div className="relative -mt-16 max-h-[60vh] overflow-hidden hidden md:block">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            width={1920}
            height={1080}
            className="shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
      )}
      <div className="md:container">
        <div className="grid gap-4 md:grid-cols-[auto,1fr] md:gap-10 xl:gap-16">
          <div className="relative aspect-[2/3] place-self-start w-full -mt-16 md:w-40 md:-mt-32 lg:w-64 lg:-mt-64 md:border md:rounded-lg md:shadow-lg md:overflow-hidden">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} poster`}
              fill
              className="bg-muted object-cover"
              priority
            />
          </div>
          <div className="space-y-4 mt-4 p-3 md:p-0">
            <div className="flex flex-wrap gap-2">
              <Badge>
                <Star fill="yellow" className="w-3 h-3 mr-1" />
                {movie.vote_average.toFixed(1)}
              </Badge>
              {movie.genres.map((genre) => (
                <Link
                  key={genre.id}
                  href={`/movie/discover?with_genres=${genre.id}`}
                >
                  <Badge variant="secondary">{genre.name}</Badge>
                </Link>
              ))}
            </div>
            <h1 className="text-2xl font-extrabold xl:text-4xl">
              {movie.title}
            </h1>
            {movie.tagline && (
              <p className="text-muted-foreground xl:text-lg italic">
                "{movie.tagline}"
              </p>
            )}
            <p className="text-muted-foreground xl:text-lg">{movie.overview}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
