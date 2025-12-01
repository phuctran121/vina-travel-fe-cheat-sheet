// components/home/FeaturedSection.tsx
import FeaturedSliderWrapper from "./FeaturedSliderWrapper";
import { getBaseUrl } from "@/lib/utils";
import { TOURS } from "@/lib/mock-db";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/Skeleton";

// Fetch Data từ Mock API (Server Side)
// Fallback to direct import if fetch fails (more reliable for SSR)
async function AsyncTourList() {
  // Giả sử API này chậm 2s
  const tours = await getFeaturedTours();
  return <FeaturedSliderWrapper tours={tours} />;
}
async function getFeaturedTours() {
  try {
    const baseUrl = await getBaseUrl();
    const url = baseUrl ? `${baseUrl}/api/tours?limit=6` : "/api/tours?limit=6";
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.warn("Failed to fetch tours from API, using direct import");
      return TOURS;
    }
    const payload = await res.json();
    return payload.data;
  } catch (error) {
    console.error("Error fetching tours:", error);
    // Fallback to direct import if fetch fails
    return [];
  }
}

export default async function FeaturedSection() {
  return (
    <section className="container w-full mx-auto py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Tour Nổi Bật</h2>
        <p className="text-gray-600 mt-2">
          Những hành trình được yêu thích nhất mùa hè này
        </p>
      </div>

      {/* Truyền data xuống Wrapper (Client Island) */}
      <Suspense fallback={<Skeleton className="h-80 w-full" />}>
        <AsyncTourList />
      </Suspense>
    </section>
  );
}
