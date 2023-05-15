import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest) {
	const requestedPage = req.nextUrl.pathname;
	const url = req.nextUrl.clone();
	url.pathname = `/login`;
	url.search = `p=${requestedPage}`;

	// Gets the token from the client
	const jwt = <{ name: string; value: string } | undefined>(
		req.cookies.get('jwt')
	);

	// If token doesn't exist then redirect to login
	if (jwt === undefined) {
		// Exceptions:
		if (requestedPage === '/login' || requestedPage === '/signup') {
			return NextResponse.next();
		}
		return NextResponse.redirect(url);
	}

	if (requestedPage === '/login' || requestedPage === '/signup') {
		return NextResponse.redirect(new URL('/profile', req.nextUrl));
	}

	// Checks if the token is valid, if not redirect to login
	try {
		await jwtVerify(
			jwt.value,
			new TextEncoder().encode(process.env.JWT_SECRET)
		);

		return NextResponse.next();
	} catch (error) {
		return NextResponse.redirect(url);
	}
}

export const config = {
	matcher: ['/profile', '/login', '/signup'],
};
