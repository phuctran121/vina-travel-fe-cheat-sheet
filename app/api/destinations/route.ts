import { NextResponse } from "next/server";
import { DESTINATIONS } from "@/lib/mock-db";
import { delay } from "@/lib/utils";

export async function GET() {
  await delay(200);
  return NextResponse.json(DESTINATIONS);
}
