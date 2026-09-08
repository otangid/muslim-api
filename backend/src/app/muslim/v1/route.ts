import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: 200,
    message: "Muslim V1 Endpoints",
    endpoints: {
      quran: "/quran",
      doa: "/doa",
      dzikir: "/dzikir",
      hadits: "/hadits",
    },
    timestamp: new Date().toISOString(),
  });
}
