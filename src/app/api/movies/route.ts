import { db } from '@/utils/db';
import Movie from '@/models/movie.model';
db();

export async function GET(request: Request) {
  let res = await Movie.find();
  let data = JSON.parse(JSON.stringify(res));
  return new Response(JSON.stringify(data));
}
