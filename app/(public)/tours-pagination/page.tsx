import { Suspense } from "react";
import TourCard from "@/components/tours/TourCard";
import { Skeleton } from "@/components/ui/Skeleton";
import Link from "next/link";

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

interface ToursResponse {
  data: Tour[];
}

// 1. Tách logic Fetching ra component con (Async)
async function TourList({ page }: { page: number }) {
  // Gọi API (Server-side fetch)
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
    }/api/tours?page=${page}&limit=6`,
    { cache: "no-store" } // Không cache để thấy loading mỗi lần chuyển trang
  );
  const { data: tours }: ToursResponse = await res.json();

  if (!tours || tours.length === 0) return <div>Không có dữ liệu.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 animate-in fade-in zoom-in-95 duration-300">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}

// 2. Component Skeleton cho List
function TourListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="h-[400px] border rounded-xl bg-gray-50 overflow-hidden"
        >
          <Skeleton className="h-60 w-full" />
          <div className="p-4 space-y-3">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

// 3. Page Chính
type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ToursPaginationPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = parseInt(page || "1");

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Danh sách Tour (Pagination)</h1>

      {/* BÍ KÍP NẰM Ở ĐÂY: Key = currentPage */}
      {/* Khi key thay đổi, React sẽ hủy component cũ và tạo component mới */}
      {/* Việc này kích hoạt Suspense fallback hiện ra ngay lập tức */}
      <Suspense key={currentPage} fallback={<TourListSkeleton />}>
        <TourList page={currentPage} />
      </Suspense>

      {/* Pagination Controls (Giữ nguyên như cũ) */}
      <div className="flex justify-center gap-2 mt-8">
        <Link
          href={`/tours-pagination?page=${
            currentPage > 1 ? currentPage - 1 : 1
          }`}
          className="px-4 py-2 border rounded hover:bg-gray-100 transition"
        >
          Prev
        </Link>
        <span className="px-4 py-2 bg-gray-100 rounded font-bold">
          {currentPage}
        </span>
        <Link
          href={`/tours-pagination?page=${currentPage + 1}`}
          className="px-4 py-2 border rounded hover:bg-gray-100 transition"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
