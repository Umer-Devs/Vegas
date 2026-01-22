import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const isAdmin = request.cookies.get('is_admin')?.value === 'true';
    const { pathname } = request.nextUrl;

    // Protected routes
    if (pathname.startsWith('/dashboard')) {
        if (!isAdmin) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // Auth routes (redirect if already logged in)
    if (pathname === '/login') {
        if (isAdmin) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard', '/dashboard/:path*', '/login'],
};
