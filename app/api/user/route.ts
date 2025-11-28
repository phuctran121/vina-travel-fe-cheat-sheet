import { NextResponse } from "next/server";
import { USER_PROFILE } from "@/lib/mock-db";
import { delay } from "@/lib/utils";

export async function GET() {
  await delay(100); // Lấy profile nhanh
  return NextResponse.json(USER_PROFILE);
}
