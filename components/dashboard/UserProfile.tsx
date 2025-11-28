import Image from "next/image";
import HeroImg from "@/public/images/aop-hero-section_poster.webp";

async function getUser() {
  // Gọi API User (Mock delay 100ms)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/user`,
    {
      cache: "no-store", // Dashboard cần data mới nhất, không cache
    }
  );
  if (!res.ok) throw new Error("Failed to load user");
  return res.json();
}

export default async function UserProfile() {
  const user = await getUser();

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6">
      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20">
        <Image
          src={HeroImg}
          alt={user.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
        <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full">
          {user.membership}
        </span>
      </div>
    </div>
  );
}
