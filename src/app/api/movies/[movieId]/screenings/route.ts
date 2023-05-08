import { db } from '@/utils/db';
import Screening from '@/models/screening.model';
import screeningModel from '@/models/screening.model';
import { NextResponse } from 'next/server';
db();

export async function GET(req: Request) {
  const screenings = await Screening.find();
  return new Response(JSON.stringify(screenings));
}

export async function POST(request: any, { params }: any) {
  try {
    const newScreening = new screeningModel({
      salon: 'B',
      time: '2023-05-25T12:00:00.685Z',
      movie: params.movieId,
      seats: 48,
    });
    const savedScreening = await newScreening.save();

    return NextResponse.json(savedScreening, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: 'Serverside error' }, { status: 500 });
  }
}
