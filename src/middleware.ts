import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest) {
	// Gets the token from the client
	const jwt = <{ name: string; value: string } | undefined>(
		req.cookies.get('jwt')
	);

	// If token doesn't exist then redirect to login
	if (jwt === undefined) {
		return NextResponse.redirect(new URL('/login', req.url));
	}

	// Checks if the token is valid, if not redirect to login
	try {
		const { payload } = await jwtVerify(
			jwt.value,
			new TextEncoder().encode(process.env.JWT_SECRET)
		);
		// console.log(payload);
		return NextResponse.next();
	} catch (error) {
		console.log(error);
		return NextResponse.redirect(new URL('/login', req.url));
	}
}

export const config = {
	matcher: ['/profile'],
};
