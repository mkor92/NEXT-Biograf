import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export async function GET(request: Request) {
	const cookie = cookies().get('jwt');

	if (!cookie)
		return NextResponse.json({ msg: 'No token found' }, { status: 500 });

	try {
		// If this passes then we have a valid token
		verify(cookie.value, process.env.JWT_SECRET);
		const response = NextResponse.json({ msg: 'Logged out!' }, { status: 200 });

		// Removes the cookie
		response.cookies.set({
			name: 'jwt',
			value: cookie.value,
			httpOnly: true,
			maxAge: -1,
			sameSite: 'strict',
			path: '/',
		});

		return response;
	} catch {
		return NextResponse.json({ msg: 'Invalid token' }, { status: 404 });
	}
}
