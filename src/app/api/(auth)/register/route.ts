import { db } from '@/utils/db';
import { NextResponse } from 'next/server';
import User from '@/models/user.model';
db();

export async function POST(request: Request) {
	const body = await request.json();

	if (!body.name || !body.email || !body.password)
		
	return NextResponse.json({ msg: 'Saknar information' }, { status: 400 });
	
	//return new Response('Hello from NextJS!');

	try {
		const user = await User.findOne({ email: body.email });
		
		
		if (user) {
		return NextResponse.json(
			{ msg: 'Kontot är redan registrerat' },
			{ status: 409 }
		); }
		else {
			await User.save({name: body.name, email: body.email, password: body.password})) ;

			return NextResponse.json(
				{ msg: 'Välkommen!' },
				{ status: 201 }
			)
		}
	} catch {
		return NextResponse.json(
			{ msg: 'Ett fel uppstod, försök igen!' },
			{ status: 500 }
		);
	}
}
// route for register 