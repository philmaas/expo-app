export function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name") ?? "world";

  return Response.json({ message: `Hello, ${name}!` });
}

export async function POST(request: Request) {
  const body = await request.json();

  return Response.json({
    message: `Hello, ${body.name ?? "world"}!`,
    received: body,
  });
}
