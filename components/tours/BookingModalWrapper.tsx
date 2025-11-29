"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/Skeleton";

// Lazy Load cái Form nặng ở trên
const DynamicBookingForm = dynamic(() => import("./BookingForm"), {
  loading: () => (
    // Loading UI khi đang tải code JS của Modal về
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <Skeleton className="h-8 w-40 mb-4" />
        <Skeleton className="h-60 w-80" />
      </div>
    </div>
  ),
  ssr: false, // Modal không cần SEO -> Tắt SSR
});

export default function BookingModalWrapper({
  tourName,
  price,
}: {
  tourName: string;
  price: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full py-4 bg-primary hover:bg-sky-600 text-white font-bold rounded-lg transition-colors text-lg shadow-md"
      >
        Đặt ngay (Lazy Load)
      </button>

      {/* Chỉ khi isOpen = true, Next.js mới bắt đầu tải code BookingForm về */}
      {isOpen && (
        <DynamicBookingForm
          tourName={tourName}
          price={price}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
