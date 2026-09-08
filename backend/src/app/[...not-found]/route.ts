import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = request.url;
  return NextResponse.json(
    {
      status: 404,
      message: "API Endpoint tidak ditemukan",
      path: url,
      timestamp: new Date().toISOString(),
    },
    { status: 404 },
  );
}

// Menangani semua jenis HTTP Method yang salah alamat
export const POST = GET;
export const PUT = GET;
export const PATCH = GET;
export const DELETE = GET;
