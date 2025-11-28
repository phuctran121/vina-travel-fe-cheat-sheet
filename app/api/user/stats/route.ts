import { NextResponse } from "next/server";
import { USER_STATS } from "@/lib/mock-db";
import { delay } from "@/lib/utils";

export async function GET() {
  // Delay tận 3 giây!
  // Để demo: Trang Dashboard hiện ra rồi, nhưng biểu đồ vẫn quay quay chờ data này
  await delay(3000);
  return NextResponse.json(USER_STATS);
}
