import { NextResponse } from "next/server";
import { TOURS } from "@/lib/mock-db";
import { delay } from "@/lib/utils";

// 1. Định nghĩa Type cho Params là Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export async function GET(
  request: Request,
  { params }: Props // 2. Nhận params dưới dạng Promise
) {
  // Delay 1s giả lập mạng chậm
  await delay(1000);

  // 3. QUAN TRỌNG: Phải await params trước khi lấy slug
  const { slug } = await params;

  const tour = TOURS.find((t) => t.slug === slug);

  if (!tour) {
    return NextResponse.json({ error: "Tour not found" }, { status: 404 });
  }

  return NextResponse.json(tour);
}
