import { db } from '@/utils/db';
import Screening from '@/models/screening.model';
import screeningModel from '@/models/screening.model';
import { NextResponse } from 'next/server';
import { useParams } from 'next/navigation';
db();

export async function GET(request: any, { params }: any) {
	const screenings = await Screening.find({ movie: params.movieId });
	if (screenings.length === 0)
		return NextResponse.json({ msg: 'No screenings found' }, { status: 404 });
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
