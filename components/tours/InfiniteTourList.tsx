"use client";

import {
  useInfiniteQuery,
  InfiniteData,
  QueryFunctionContext,
} from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import TourCard from "./TourCard";

// Reuse Tour shape from API/TourCard
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

interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasMore: boolean;
}

interface ToursPage {
  data: Tour[];
  pagination: PaginationMeta;
}

// Hàm fetch gọi ở client
const fetchTours = async ({
  pageParam = 1,
}: QueryFunctionContext<["tours-infinite"], number>): Promise<ToursPage> => {
  const res = await fetch(`/api/tours?page=${pageParam}&limit=6`);
  return res.json();
};

interface InfiniteTourListProps {
  initialData: ToursPage;
}

export default function InfiniteTourList({
  initialData,
}: InfiniteTourListProps) {
  // 1. Hook Intersection Observer (Cảm biến cuộn)
  const { ref, inView } = useInView();

  // 2. TanStack Infinite Query
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<
      ToursPage,
      Error,
      InfiniteData<ToursPage>,
      ["tours-infinite"],
      number
    >({
      queryKey: ["tours-infinite"],
      queryFn: fetchTours,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        // Logic xác định trang tiếp theo
        if (lastPage.pagination.hasMore) {
          return lastPage.pagination.page + 1;
        }
        return undefined;
      },
      // Quan trọng: Sử dụng initialData từ server để trang 1 hiện ngay lập tức
      initialData: {
        pages: [initialData],
        pageParams: [1],
      },
    });

  // 3. Tự động load khi thấy đáy (inView = true)
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Render tất cả các trang đã load */}
        {data?.pages.map((group: ToursPage) =>
          group.data.map((tour: Tour) => <TourCard key={tour.id} tour={tour} />)
        )}
      </div>

      {/* Loading Skeleton khi đang tải trang tiếp theo */}
      {isFetchingNextPage && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-[400px] border rounded-xl bg-gray-50 animate-pulse"
            />
          ))}
        </div>
      )}

      {/* Điểm neo để trigger load more */}
      <div ref={ref} className="h-10 mt-10 flex justify-center text-gray-500">
        {!hasNextPage && "Bạn đã xem hết danh sách!"}
      </div>
    </div>
  );
}
