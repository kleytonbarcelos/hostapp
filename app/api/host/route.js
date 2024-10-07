export async function GET(request) {
  const host = request.headers.get("host") || "Host não identificado";

  return new Response(JSON.stringify({ host }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
