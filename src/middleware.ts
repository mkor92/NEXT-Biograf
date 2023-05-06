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
		const requestedPage = req.nextUrl.pathname;
		const url = req.nextUrl.clone();
		url.pathname = `/login`;
		url.search = `p=${requestedPage}`;
		return NextResponse.redirect(url);
	}

	// Checks if the token is valid, if not redirect to login
	try {
		await jwtVerify(
			jwt.value,
			new TextEncoder().encode(process.env.JWT_SECRET)
		);
		return NextResponse.next();
	} catch (error) {
		const requestedPage = req.nextUrl.pathname;
		const url = req.nextUrl.clone();
		url.pathname = `/login`;
		url.search = `p=${requestedPage}`;
		return NextResponse.redirect(url);
	}
}

export const config = {
	matcher: ['/profile'],
};
