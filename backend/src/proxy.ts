import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LRUCache } from "lru-cache";
// Simpan data limiter di memori (Global)
const tokenCache = new LRUCache({
  max: 500,
  ttl: 15 * 60 * 1000, // 15 Menit
});

export function proxy(request: NextRequest) {
  // Hanya jalankan untuk route API
  if (request.nextUrl.pathname.startsWith("/muslim")) {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const limit = 100;
    const tokenCount = (tokenCache.get(ip) as number[]) || [0];

    if (tokenCount[0] >= limit) {
      return NextResponse.json({ status: "Gagal", message: "Terlalu banyak permintaan..." }, { status: 429 });
    }

    tokenCount[0] += 1;
    tokenCache.set(ip, tokenCount);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/muslim/v1/:path*",
};
