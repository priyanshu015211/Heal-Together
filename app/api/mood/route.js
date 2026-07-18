import { NextResponse } from "next/server";
import { addMood, getMoods } from "../../../lib/store";

export async function GET() {
  return NextResponse.json({ moods: getMoods() });
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const { mood, note } = body;

  if (!mood) {
    return NextResponse.json({ error: "Mood is required." }, { status: 400 });
  }

  const record = addMood({ mood, note: note || "" });
  return NextResponse.json({ entry: record }, { status: 201 });
}
