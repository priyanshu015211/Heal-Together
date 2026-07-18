import { NextResponse } from "next/server";
import { addSupportPost, getSupportPosts } from "../../../lib/store";

export async function GET() {
  return NextResponse.json({ posts: getSupportPosts() });
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const { message } = body;

  if (!message || !message.trim()) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  // Anonymous by design: we intentionally never store any user/session
  // identifier alongside a support post.
  const record = addSupportPost({ message: message.trim() });
  return NextResponse.json({ post: record }, { status: 201 });
}
