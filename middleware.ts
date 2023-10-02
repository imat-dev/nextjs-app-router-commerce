import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
	const cookie = request.cookies.get('next-auth.session-token');
	if (!cookie) {
		return NextResponse.redirect(new URL('/login', request.url));
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: '/profile/:path*',
};