import { db } from '@/utils/db';
import Movie from '@/models/movie.model';
db();

export async function GET(request: Request) {
  const movies = await Movie.find();
  return new Response(JSON.stringify(movies));
}
