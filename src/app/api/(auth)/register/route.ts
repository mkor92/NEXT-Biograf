import { db } from '@/utils/db';
import { NextResponse } from 'next/server';
import User from '@/models/user.model';
db();

export async function POST(request: Request) {
	const body: {
		name: string,
		email: string,
		password: string,
	} = await request.json();

	if (!body.name || !body.email || !body.password) {
	return NextResponse.json({ msg: 'Saknar information' }, { status: 400 });
	}

	try {

		const user = await User.findOne({ email: body.email });
		console.log(user)
		
		if (user) {
		return NextResponse.json(
			{ msg: 'Kontot är redan registrerat' },
			{ status: 409 }
		); }

		if(!user) {
			let newUser = new User(body)
			await newUser.save(); 

			return NextResponse.json(
				{ msg: 'Du är nu registrerat. Välkommen', data: { name: body.name} },
				{ status: 201 }	
			)
		}
		
	} catch(error) {
		console.log(error);
		return NextResponse.json(
			{ msg: 'Ett fel uppstod, försök igen!' },
			{ status: 500 }
		);
	}
}
