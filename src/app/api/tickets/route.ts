import { db } from '@/utils/db';
import Ticket, { ITicket } from '@/models/ticket.model';
import { NextResponse } from 'next/server';
db();

export async function POST(request: Request) {
  try {
    const data: ITicket = await request.json();
    const newTicket = new Ticket(data);
    await newTicket.save();
    return NextResponse.json({ msg: 'booking complete' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: 'Serverside error' }, { status: 500 });
  }
}
