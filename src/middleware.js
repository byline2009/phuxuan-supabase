import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request) {
    const { nextUrl } = request;

    // Bỏ qua middleware cho các route xác thực
    if (
        nextUrl.pathname.startsWith("/auth/confirm") ||
        nextUrl.pathname.startsWith("/verify") ||
        nextUrl.pathname.startsWith("/login") ||
        nextUrl.pathname.startsWith("/signup")
    ) {
        return; // Cho phép request đi qua, không gọi updateSession
    }
    return await updateSession(request);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}