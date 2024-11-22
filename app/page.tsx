import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Star } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <section aria-labelledby="recent-movies" className="mb-12">
          <h2 id="recent-movies" className="text-2xl font-semibold mb-4">
            最近見た映画
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((movie) => (
              <Card key={movie}>
                <CardHeader className="p-0">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Movie+${movie}`}
                    alt={`Movie ${movie}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">
                    映画タイトル {movie}
                  </CardTitle>
                  <p className="text-muted-foreground mb-2">
                    ジャンル • 上映時間
                  </p>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span>4.5 / 5</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section aria-labelledby="recommended-movies" className="mb-12">
          <h2 id="recommended-movies" className="text-2xl font-semibold mb-4">
            おすすめの映画
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((movie) => (
              <Card key={movie}>
                <CardHeader className="p-0">
                  <Image
                    src={`/placeholder.svg?height=150&width=300&text=Recommended+${movie}`}
                    alt={`Recommended Movie ${movie}`}
                    width={300}
                    height={150}
                    className="w-full h-36 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className="text-base">
                    おすすめ映画 {movie}
                  </CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Button className="fixed bottom-6 right-6 rounded-full" size="lg">
          <PlusCircle className="mr-2 h-5 w-5" /> 新しい映画を追加
        </Button>
      </main>
    </div>
  );
}
