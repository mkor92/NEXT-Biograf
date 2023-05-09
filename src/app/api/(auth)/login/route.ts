import { db } from '@/utils/db';
import User from '@/models/user.model';
import { NextResponse } from 'next/server';
import { sign as jwtSign } from 'jsonwebtoken';
db();

export async function POST(request: Request) {
	const body = await request.json();

	// Validation
	if (!body.email || !body.password)
		return NextResponse.json({ msg: 'Saknar information' }, { status: 400 });

	try {
		const user = await User.findOne({ email: body.email });

		if (!user)
			return NextResponse.json(
				{ msg: 'Fel email eller lösenord' },
				{ status: 401 }
			);

		const correctPassoword = await user.comparePassword(body.password);
		if (!correctPassoword)
			return NextResponse.json(
				{ msg: 'Fel email eller lösenord' },
				{ status: 401 }
			);

		// JWT AUTH
		const expDate = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7;

		const token = jwtSign(
			{
				exp: expDate,
				email: user.email,
				name: user.name,
			},
			process.env.JWT_SECRET
		);

		const response = NextResponse.json(
			{ msg: 'Logged in!', data: { name: user.name, email: user.email } },
			{ status: 200 }
		);

		// Set token in cookies
		response.cookies.set({
			name: 'jwt',
			value: token,
			httpOnly: true,
			maxAge: expDate,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			path: '/',
		});

		return response;
	} catch {
		return NextResponse.json(
			{ msg: 'Ett fel uppstod, försök igen!' },
			{ status: 500 }
		);
	}
}
