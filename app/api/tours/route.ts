import { NextResponse } from "next/server";
import { TOURS } from "@/lib/mock-db";
import { delay } from "@/lib/utils";

export async function GET(request: Request) {
  await delay(500); // Giả lập mạng

  const { searchParams } = new URL(request.url);
  // Lấy tham số phân trang
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "6"); // Mặc định 6 tour/trang
  const search = searchParams.get("search")?.toLowerCase() || "";

  // 1. Lọc theo search trước
  let filteredData = TOURS;
  if (search) {
    filteredData = TOURS.filter(
      (t) =>
        t.name.toLowerCase().includes(search) ||
        t.location.toLowerCase().includes(search)
    );
  }

  // 2. Tính toán phân trang
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  // 3. Trả về cả data và metadata (tổng số trang)
  return NextResponse.json({
    data: paginatedData,
    pagination: {
      page,
      limit,
      total: filteredData.length,
      totalPages: Math.ceil(filteredData.length / limit),
      hasMore: endIndex < filteredData.length,
    },
  });
}
