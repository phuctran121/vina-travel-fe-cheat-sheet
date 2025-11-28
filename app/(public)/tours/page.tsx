import TourCard from "@/components/tours/TourCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách Tour du lịch",
  description: "Danh sách các tour du lịch hấp dẫn nhất",
};
interface Tour {
  id: string;
  slug: string;
  image: string;
  name: string;
  duration: string;
  location: string;
  reviews: number;
  price: number;
}
// Hàm fetch data an toàn
async function getTours(search?: string) {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/tours`
  );

  // Chỉ append param search nếu nó có giá trị (không rỗng, không undefined)
  if (search && search.trim() !== "") {
    url.searchParams.set("search", search);
  }

  // Dùng no-store để test search realtime, hoặc force-cache nếu muốn test tốc độ
  const res = await fetch(url.toString(), { cache: "no-store" });

  if (!res.ok) {
    // Trường hợp lỗi API thì trả về mảng rỗng thay vì throw error làm sập trang
    console.error("Failed to fetch tours");
    return [];
  }

  return res.json();
}

type Props = {
  searchParams: Promise<{ search?: string }>;
};

export default async function ToursPage({ searchParams }: Props) {
  // 1. Await searchParams (Bắt buộc ở Next.js 15)
  const resolvedSearchParams = await searchParams;

  // 2. Xử lý fallback: Nếu undefined thì về chuỗi rỗng ""
  const query = resolvedSearchParams.search ?? "";

  // 3. Gọi fetch
  const tours = await getTours(query);

  return (
    <div className="container py-10">
      <div className="mb-8">
        {/* 4. UI Conditional: Hiển thị tiêu đề khác nhau */}
        <h1 className="text-3xl font-bold text-gray-900">
          {query ? `Kết quả tìm kiếm: "${query}"` : "Tất cả Tour du lịch"}
        </h1>
        <h1>{Date.now()}</h1>

        <p className="text-gray-500 mt-2">
          {query
            ? `Tìm thấy ${tours.length} kết quả phù hợp`
            : `Khám phá ${tours.length} điểm đến hấp dẫn nhất`}
        </p>
      </div>

      {tours.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour: Tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        // UI Empty State đẹp hơn
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-lg font-bold text-gray-900">
            Không tìm thấy kết quả
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            Thử tìm kiếm với từ khóa khác nhé!
          </p>
          <a
            href="/tours"
            className="mt-6 px-6 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Xóa bộ lọc
          </a>
        </div>
      )}
    </div>
  );
}
