// components/home/FeaturedSliderWrapper.tsx
"use client"; // <--- QUAN TRỌNG: Đây là Island

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/Skeleton";

// Skeleton UI
function SliderSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-[400px] border rounded-xl overflow-hidden">
          <Skeleton className="h-60 w-full" />
          <div className="p-5 space-y-3">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Lazy load TourSlider tại đây
const DynamicTourSlider = dynamic(() => import("./TourSlider"), {
  loading: () => <SliderSkeleton />,
  ssr: false, // Hợp lệ vì file này là Client Component
});

// Component này nhận data từ Server và truyền xuống Slider
export default function FeaturedSliderWrapper({ tours }: { tours: never[] }) {
  return <DynamicTourSlider tours={tours} />;
}
