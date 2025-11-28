"use client"; // Đánh dấu Client Component

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Chuyển hướng sang trang danh sách tour với params
    router.push(`/tours?search=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white p-4 rounded-lg shadow-xl max-w-3xl w-full mx-auto flex flex-col md:flex-row gap-4 absolute -bottom-8 left-1/2 -translate-x-1/2 z-20"
    >
      <div className="flex-1">
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Điểm đến
        </label>
        <input
          type="text"
          id="search"
          placeholder="Bạn muốn đi đâu? (Hạ Long, Đà Nẵng...)"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="flex items-end">
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-2 bg-primary text-white font-bold rounded-md hover:bg-sky-600 transition-colors h-[42px]"
        >
          Tìm kiếm
        </button>
      </div>
    </form>
  );
}
