import { NextResponse } from "next/server";

export function middleware(req) {
  const host = req.headers.get("host") || "Host não identificado";

  // Adiciona o host no cabeçalho para ser utilizado no componente da página
  const response = NextResponse.next();
  response.headers.set("x-host", host);
  return response;
}
