import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: 200,
    message: "Quran Endpoints",
    endpoints: {
      asbab: "/asbab",
      asma: "/asma",
      ayah: "/ayah",
      juz: "/juz",
      surah: "/surah",
      tafsir: "/tafsir",
      theme: "/theme",
      word: "/word",
    },
    timestamp: new Date().toISOString(),
  });
}
