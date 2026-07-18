import { NextResponse } from "next/server";
import { addJournalEntry, getJournalEntries } from "../../../lib/store";

export async function GET() {
  return NextResponse.json({ entries: getJournalEntries() });
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const { title, content } = body;

  if (!content || !content.trim()) {
    return NextResponse.json({ error: "Journal content is required." }, { status: 400 });
  }

  const record = addJournalEntry({ title: title || "Untitled entry", content });
  return NextResponse.json({ entry: record }, { status: 201 });
}
