import { db } from '@/utils/db';
import Movie from '@/models/movie.model';
import { NextResponse } from 'next/server';
db();

export async function GET(request: any, { params }: any) {
  const movie = await Movie.findById(params.movieId);
  return NextResponse.json({ movie });
}
