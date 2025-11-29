// components/HomeSliderSection.tsx
"use client"; // <--- QUAN TRỌNG: Đánh dấu đây là vùng đất của Client

import dynamic from "next/dynamic";

// Skeleton Loading (Giữ nguyên logic của bạn)
const SliderSkeleton = () => (
  <div className="w-full h-[300px] bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
    Loading Slider...
  </div>
);

// Lazy Load Component VÀO TRONG file Client này
// Lúc này ssr: false hoàn toàn hợp lệ vì file này chạy ở Client context
const DynamicSlider = dynamic(() => import("@/components/home/MySlider"), {
  loading: () => <SliderSkeleton />,
  ssr: false,
});

export default function HomeSliderSection() {
  return (
    <section className="py-10">
      <DynamicSlider />
    </section>
  );
}
