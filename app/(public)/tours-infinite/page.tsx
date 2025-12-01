import { Suspense } from "react";
import InfiniteTourList from "@/components/tours/InfiniteTourList";
import { Skeleton } from "@/components/ui/Skeleton";
// Fetch trang 1 trên server
async function getInitialTours() {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
    }/api/tours?page=1&limit=6`,
    { cache: "no-store" }
  );
  return res.json();
}

async function InfiniteTourListWrapper() {
  const initialData = await getInitialTours();
  return <InfiniteTourList initialData={initialData} />;
}

export default async function ToursInfinitePage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">
        Danh sách Tour (Infinite Scroll)
      </h1>
      <p className="text-gray-500 mb-8">Cuộn xuống để xem thêm...</p>

      {/* Truyền data trang 1 xuống Client Component */}
      <Suspense fallback={<ListSkeleton />}>
        <InfiniteTourListWrapper />
      </Suspense>
    </div>
  );
}

function ListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-[400px] w-full" />
      ))}
    </div>
  );
}
