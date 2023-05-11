import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

export async function GET(request: Request) {
	const jwt = <{ name: string; value: string } | undefined>cookies().get('jwt');

	if (jwt === undefined) {
		return NextResponse.json(
			{ msg: 'Autentiserings-id saknas' },
			{ status: 404 }
		);
	}

	try {
		// Checks if the token is valid
		const { payload } = await jwtVerify(
			jwt.value,
			new TextEncoder().encode(process.env.JWT_SECRET)
		);

		return NextResponse.json(
			{
				name: payload.name as string,
				email: payload.email as string,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ msg: 'Autentiserings-id saknas' },
			{ status: 404 }
		);
	}
}
