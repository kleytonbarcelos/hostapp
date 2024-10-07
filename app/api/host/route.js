import { NextResponse } from "next/server";

export async function GET(req) {
  const host = req.headers.get("host") || "Host não identificado";
  return NextResponse.json({ host });
}
