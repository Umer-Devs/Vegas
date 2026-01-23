import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Authentication bypass as per user request
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard', '/dashboard/:path*', '/login'],
};
