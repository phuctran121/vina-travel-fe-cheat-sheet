import Image from "next/image";
import Link from "next/link";

export interface NewsItem {
  id: string;
  category: string;
  image: string;
  title: string;
  date: string;
  desc?: string;
}

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <Link href="#" className="flex gap-2.5 group">
      {/* Image */}
      <div className="relative w-25 h-17.5 md:w-40 md:h-28.25 shrink-0 rounded-lg overflow-hidden bg-gray-200">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center py-0.5 w-full gap-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm md:text-base lg:text-[16px] font-bold text-gray-900 line-clamp-2 leading-snug group-hover:text-[#FF5F00] transition-colors">
            {item.title}
          </h3>
        </div>
        <div className="text-xs text-gray-400 font-medium mt-1">
          <span>{item.date}</span>
        </div>
      </div>
    </Link>
  );
}
