// import { NextRequest } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  return Response.json({ data: id });
}

// export async function POST(req, { params }) {
//   const { id } = await params;
//   return Response.json({ data: `this is a post data to ${id}` });
// }

export async function POST(req) {
  const form = await req.formData();
  const name = form.get("name");
  const age = form.get("age");
  return Response.json({ name, age });
}

//getting query string

// export async function GET(req) {
//   return  Response.json({ x: req.nextUrl.searchParams.get("q") });
// }
