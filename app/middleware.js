import { NextResponse } from "next/server";

export function middleware(req) {
  const host = req.nextUrl.host || "Host não identificado";

  const response = NextResponse.next();
  response.headers.set("x-host", host);
  return response;
}
