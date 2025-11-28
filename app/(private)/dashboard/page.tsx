import { Suspense } from "react";
import UserProfile from "@/components/dashboard/UserProfile";
import RevenueChart from "@/components/dashboard/RevenueChart";
import { Skeleton } from "@/components/ui/Skeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard cá nhân",
};

export default function DashboardPage() {
  return (
    <div className="container py-10  min-h-screen mx-auto w-full">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Tổng quan</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* CỘT TRÁI: User Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* 1. Phần này nhanh -> Load luôn hoặc suspense nhẹ */}
          <Suspense fallback={<Skeleton className="h-40 w-full rounded-xl" />}>
            <UserProfile />
          </Suspense>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-4">Chuyến đi sắp tới</h3>
            <div className="p-4 bg-sky-50 rounded-lg border border-sky-100 text-sky-800">
              Bạn chưa có chuyến đi nào sắp tới.{" "}
              <span className="underline cursor-pointer">Đặt ngay!</span>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: Chart (Nặng) */}
        <div className="lg:col-span-1">
          {/* 2. Phần này RẤT CHẬM (3s) -> Bọc Suspense để không chặn User Info */}
          <Suspense fallback={<ChartSkeleton />}>
            <RevenueChart />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

// Skeleton riêng cho Chart nhìn cho chuyên nghiệp
function ChartSkeleton() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full min-h-[400px]">
      <Skeleton className="h-8 w-1/2 mb-10" />
      <div className="flex items-end justify-between h-48 gap-4 mb-6">
        <Skeleton className="h-20 w-full rounded-t-md" />
        <Skeleton className="h-32 w-full rounded-t-md" />
        <Skeleton className="h-10 w-full rounded-t-md" />
        <Skeleton className="h-40 w-full rounded-t-md" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}
