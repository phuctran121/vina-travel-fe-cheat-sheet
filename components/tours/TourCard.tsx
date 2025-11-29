import Link from "next/link";
import OptimizedImage from "@/components/ui/OptimizedImage";
import HeroImg from "@/public/images/aop-hero-section_poster.webp";

interface Tour {
  id: string;
  slug: string;
  image: string;
  name: string;
  duration: string;
  location: string;
  reviews: number;
  price: number;
}

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <Link href={`/tours/${tour.slug}`} className="group block h-full">
      <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Wrapper ảnh */}
        <div className="relative aspect-4/3 w-full overflow-hidden">
          <OptimizedImage
            src={HeroImg}
            alt={tour.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            // Tối ưu sizes cho Grid:
            // Mobile (1 cột): 100vw
            // Tablet (2 cột): 50vw
            // Desktop (3 cột): 33vw
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-gray-800">
            {tour.duration}
          </div>
        </div>

        {/* Nội dung */}
        <div className="p-4 flex flex-col flex-1">
          <div className="text-xs text-primary font-semibold mb-2 uppercase">
            {tour.location}
          </div>
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {tour.name}
          </h3>
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500">
              {tour.reviews} đánh giá
            </span>
            <span className="text-lg font-bold text-primary">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(tour.price)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
