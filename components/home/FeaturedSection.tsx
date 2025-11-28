// components/home/FeaturedSection.tsx
import FeaturedSliderWrapper from "./FeaturedSliderWrapper";

// Fetch Data từ Mock API (Server Side)
async function getFeaturedTours() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/tours`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch tours");
  return res.json();
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
