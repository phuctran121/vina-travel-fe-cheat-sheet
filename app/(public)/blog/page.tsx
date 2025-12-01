import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/mock-db"; // Import trực tiếp
import HeroImage from "@/public/images/aop-hero-section_poster.webp";

export const metadata: Metadata = {
  title: "Cẩm nang du lịch",
  description: "Chia sẻ kinh nghiệm du lịch Việt Nam",
};

export default function BlogPage() {
  const posts = BLOG_POSTS;

  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Cẩm nang du lịch {Date.now()}
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Khám phá những điểm đến thú vị và kinh nghiệm hữu ích cho chuyến đi
          của bạn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group"
            prefetch={false}
          >
            <article className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={HeroImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-gray-400 mb-2">{post.date}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
