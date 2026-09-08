import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: 200,
    message: "Muslim Endpoints",
    endpoints: {
      v1: "/v1",
    },
    timestamp: new Date().toISOString(),
  });
}
