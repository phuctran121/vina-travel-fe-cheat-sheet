import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import MapWrapper from "@/components/tours/MapWrapper";
import { TOURS } from "@/lib/mock-db";
import { delay } from "@/lib/utils";
import { unstable_cache } from "next/cache"; // <--- 1. Import cái này
import HeroImage from "@/public/images/aop-hero-section_poster.webp";
import BookingModalWrapper from "@/components/tours/BookingModalWrapper";

type Props = {
  params: Promise<{ slug: string }>;
};

// 2. Hàm giả lập truy vấn DB (Chậm 2 giây)
// Bọc trong unstable_cache để Next.js lưu kết quả lại sau lần chạy đầu tiên
const getTourCached = unstable_cache(
  async (slug: string) => {
    // Giả lập DB chậm 2s
    await delay(2000);

    const tour = TOURS.find((t) => t.slug === slug);
    console.log("new fetch for tour:", slug);

    return tour || null;
  },
  ["get-tour-detail"], // Key cache
  { revalidate: 20 } // Cache sống trong 1 tiếng (ISR)
);

// 3. QUAN TRỌNG: Trả về mảng rỗng để KHÔNG build sẵn HTML lúc deploy
// Next.js sẽ build trang này khi có người dùng đầu tiên truy cập (On-demand)
export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = await getTourCached(slug); // Gọi hàm cached

  if (!tour) return { title: "Không tìm thấy tour" };

  return {
    title: tour.name,
    description: tour.description,
    openGraph: {
      images: [tour.image],
    },
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = await getTourCached(slug); // Gọi hàm cached

  if (!tour) notFound();

  return (
    <article>
      {/* Giữ nguyên phần UI bên dưới của bạn */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <Image
          src={HeroImage}
          alt={tour.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white container">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{tour.name}</h1>
          <div className="flex gap-4 text-sm md:text-base font-medium">
            <span className="bg-primary px-3 py-1 rounded text-white">
              {tour.location}
            </span>
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded">
              {tour.duration}
            </span>
          </div>
        </div>
      </div>

      <div className="container py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Giới thiệu</h2>
            <h1>{Date.now()}</h1>

            <p className="text-gray-600 leading-relaxed text-lg">
              {tour.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Bản đồ</h2>
            <MapWrapper location={tour.location} />
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-2">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(tour.price)}
            </div>
            <p className="text-gray-500 mb-6 text-sm">/ khách</p>
            <BookingModalWrapper tourName={tour.name} price={tour.price} />
            <p className="text-xs text-center text-gray-400 mt-4">
              Cam kết hoàn tiền 100% nếu hủy trước 24h
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
