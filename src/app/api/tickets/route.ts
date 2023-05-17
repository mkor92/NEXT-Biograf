import { db } from '@/utils/db';
import Ticket from '@/models/ticket.model';
import { NextResponse } from 'next/server';
db();

export async function GET(request: Request) {
	return new Response(
		'You have to include screening id in the request. api/tickets/[screeningId]'
	);
}

export async function POST(request: Request) {
	try {
		const data: {
			screening: string;
			seat: number;
			email: string;
		}[] = await request.json();

		for (let i = 0; i < data.length; i++) {
			let newTicket = new Ticket(data[i]);
			await newTicket.save();
		}
		return NextResponse.json({ msg: 'booking complete' }, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ msg: 'Serverside error' }, { status: 500 });
	}
}
