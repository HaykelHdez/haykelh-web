import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Rutas que NO se redirigen (la propia página y assets)
const ALLOWED = [
  "/proximamente",
  "/favicon.ico",
  "/_next",
  "/api",
  "/og-image",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Dejar pasar rutas permitidas
  if (ALLOWED.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  // Todo lo demás → /proximamente
  return NextResponse.redirect(new URL("/proximamente", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
