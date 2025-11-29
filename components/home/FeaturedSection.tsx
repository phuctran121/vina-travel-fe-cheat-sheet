// components/home/FeaturedSection.tsx
import FeaturedSliderWrapper from "./FeaturedSliderWrapper";
import { getBaseUrl } from "@/lib/utils";
import { TOURS } from "@/lib/mock-db";

// Fetch Data từ Mock API (Server Side)
// Fallback to direct import if fetch fails (more reliable for SSR)
async function getFeaturedTours() {
  try {
    const baseUrl = await getBaseUrl();
    const url = baseUrl ? `${baseUrl}/api/tours` : "/api/tours";
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.warn("Failed to fetch tours from API, using direct import");
      return TOURS;
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching tours:", error);
    // Fallback to direct import if fetch fails
    return TOURS;
  }
}

export default async function FeaturedSection() {
  const tours = await getFeaturedTours();

  return (
    <section className="container w-full mx-auto py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Tour Nổi Bật</h2>
        <p className="text-gray-600 mt-2">
          Những hành trình được yêu thích nhất mùa hè này
        </p>
      </div>

      {/* Truyền data xuống Wrapper (Client Island) */}
      <FeaturedSliderWrapper tours={tours} />
    </section>
  );
}
