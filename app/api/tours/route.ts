import { NextResponse } from "next/server";
import { TOURS } from "@/lib/mock-db";
import { delay } from "@/lib/utils";

export async function GET(request: Request) {
  await delay(500); // Giả lập delay

  // 1. Lấy search param an toàn
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search"); // Trả về string hoặc null

  // 2. Logic lọc:
  // Nếu có search -> Lọc
  // Nếu không có (null/empty) -> Trả về hết TOURS
  let data = TOURS;

  if (search) {
    const lowerSearch = search.toLowerCase();
    data = TOURS.filter(
      (t) =>
        t.name.toLowerCase().includes(lowerSearch) ||
        t.location.toLowerCase().includes(lowerSearch)
    );
  }

  return NextResponse.json(data);
}
