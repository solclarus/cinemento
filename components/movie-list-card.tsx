import { Movie } from "@/types/movie";
import { format } from "date-fns";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const MovieListCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <div role="group">
      <Link href={`/movie/${id}`} className="block">
        <div className="relative aspect-[2/3] overflow-hidden rounded-md border bg-muted transition-all hover:scale-105">
          <Image
            alt={title}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity hover:opacity-100">
            <div className="absolute bottom-0 p-2 text-white">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                <span className="text-sm font-semibold">
                  {vote_average.toFixed(1)}
                </span>
              </div>
              <h2 className="text-sm line-clamp-1">{title}</h2>
              <p className="text-xs text-gray-300">
                {format(release_date, "yyyy")}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
