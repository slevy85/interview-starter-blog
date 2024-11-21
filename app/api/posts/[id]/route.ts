import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  request: NextApiRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const posts = (await fetch("http://localhost:3000/db.json")
    .then((res) => res.json())
    .then((data) => data.posts)) as any[];

  const post = posts.find((p) => p.id.toString() === id);

  return NextResponse.json(post);
}
