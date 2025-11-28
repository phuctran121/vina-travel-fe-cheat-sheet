// components/tours/MapWrapper.tsx
"use client"; // <--- Bắt buộc

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/Skeleton";

// Lazy load MapWidget ở trong môi trường Client
const DynamicMapWidget = dynamic(() => import("./MapWidget"), {
  loading: () => (
    <Skeleton className="w-full h-[400px] rounded-xl bg-gray-200" />
  ),
  ssr: false, // Tắt SSR ở đây là hợp lệ
});

export default function MapWrapper({ location }: { location: string }) {
  return <DynamicMapWidget location={location} />;
}
