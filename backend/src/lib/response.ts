import { NextResponse } from "next/server";

export function success<T>(data: T) {
  return sendJson(200, "Sukses", data);
}

export function notFound(message: string) {
  return sendJson(404, message, null);
}

export function badRequest(message: string) {
  return sendJson(400, message, null);
}

export const sendJson = <T>(status: number, message: string, data?: T) => {
  const headers = new Headers();
  if (process.env.NODE_ENV !== "development") {
    headers.set("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=59");
  }
  return NextResponse.json({ status: status, message: message, data: data });
};

export const withErrorHandler = (handler: Function) => {
  return async (request: Request, ...args: any[]) => {
    try {
      return await handler(request, ...args);
    } catch (err: any) {
      // 1. Log error ke konsol untuk kebutuhan debugging kamu
      console.error(`[Error Log]: ${err.message}`);

      // Tampilkan stack trace hanya saat development agar aman
      if (process.env.NODE_ENV === "development") {
        console.error(err.stack);
      }

      // 2. Kirim respon JSON yang konsisten ke user
      const status = err.status || 500;
      return NextResponse.json(
        {
          status: status,
          message: err.message || "Terjadi kesalahan internal pada server Al-Quran",
          // Optional: tampilkan stack trace hanya saat development
          stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
          timestamp: new Date().toISOString(),
        },
        { status: status },
      );
    }
  };
};
