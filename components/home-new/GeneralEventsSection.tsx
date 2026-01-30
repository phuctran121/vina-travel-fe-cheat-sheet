import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import IconHandshake from "@/public/images/home/icons/icon-handshake.png";
import IconBuilding from "@/public/images/home/icons/icon-building.png";
import IconDrone from "@/public/images/home/icons/icon-green.png";
import IconLocation from "@/public/images/home/icons/icon-location.png";
import IconWorldwide from "@/public/images/home/icons/icon-worldwide.png";

// --- MOCK DATA: ICON MENU ---
const ICON_MENU = [
  {
    id: 1,
    title: "드론산업\n얼라이언스", // Drone Industry Alliance
    icon: IconHandshake,
    bg: "bg-[#C0E4FE]", // Light Blue
  },
  {
    id: 2,
    title: "드론 상용화\n사업지원", // Commercialization Support
    icon: IconDrone, // Green
    bg: "bg-[#BEF5D5]", // Light Green
  },
  {
    id: 3,
    title: "드론 실증도시\n구축사업", // Demonstration City
    icon: IconBuilding, // Red/Pink
    bg: "bg-[#FFD9D8]", // Light Red
  },
  {
    id: 4,
    title: "드론 특별\n자유화 구역", // Special Zone
    icon: IconLocation, // Yellow/Orange
    bg: "bg-[#FFEACB]", // Light Yellow
  },
  {
    id: 5,
    title: "국제 행사\n참가 지원", // Int'l Event Support
    icon: IconWorldwide, // Purple
    bg: "bg-[#D5D4F4]", // Light Purple
  },
];

// --- MOCK DATA: JOB LIST ---
const JOB_LIST = [
  {
    id: 1,
    company: "성우엔지니어링",
    title: "무인항공기(드론) 설계 및 연구개발 경력연구원 ...",
  },
  {
    id: 2,
    company: "성우엔지니어링",
    title: "드론항전개발 엔지니어 경력직 드론제어 엔지니어...",
  },
  {
    id: 3,
    company: "(주)씨엠티엑스",
    title: "생산관리 경력자 채용",
  },
  {
    id: 4,
    company: "성우엔지니어링",
    title: "CNC 선반 조작원 경력사원 구인",
  },
];

// --- MOCK DATA: CALENDAR DAYS (Static for Demo 2025.11) ---
// type: 'normal' | 'event' (pink circle) | 'selected' (orange solid)
const CALENDAR_DAYS = [
  { day: 27, type: "normal", prevMonth: true },
  { day: 28, type: "normal", prevMonth: true },
  { day: 29, type: "normal", prevMonth: true },
  { day: 30, type: "normal", prevMonth: true },
  { day: 31, type: "normal", prevMonth: true },
  { day: 1, type: "normal" },
  { day: 2, type: "normal", isWeekend: true },
  { day: 3, type: "normal" },
  { day: 4, type: "normal" },
  { day: 5, type: "normal" },
  { day: 6, type: "event" },
  { day: 7, type: "normal" },
  { day: 8, type: "normal" },
  { day: 9, type: "event", isWeekend: true },
  { day: 10, type: "normal" },
  { day: 11, type: "normal" },
  { day: 12, type: "event" },
  { day: 13, type: "event" },
  { day: 14, type: "event" },
  { day: 15, type: "normal" },
  { day: 16, type: "normal", isWeekend: true },
  { day: 17, type: "normal" },
  { day: 18, type: "selected" },
  { day: 19, type: "event" },
  { day: 20, type: "normal" },
  { day: 21, type: "normal" },
  { day: 22, type: "normal" },
  { day: 23, type: "normal", isWeekend: true },
  { day: 24, type: "normal" },
  { day: 25, type: "normal" },
  { day: 26, type: "normal" },
  { day: 27, type: "normal" },
  { day: 28, type: "normal" },
  { day: 29, type: "normal" },
  { day: 30, type: "normal", isWeekend: true },
];

export default function GeneralEventsSection() {
  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-20 font-sans">
      <div className="container mx-auto px-4 lg:px-38">
        <div className="grid grid-cols-1 lg:grid-cols-[65%_33.5%] gap-[1.5%]">
          {/* === LEFT COLUMN: GENERAL INFO & JOBS === */}
          <div className="bg-white px-2 lg:px-11 py-6 rounded-xl">
            <h2 className="text-xl md:text-2xl lg:text-[28px] font-medium text-[#2B2B2B] tracking-tighter mb-8">
              일반적인
            </h2>

            {/* 1. Icon Grid */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-7 mb-6 md:mb-17 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {ICON_MENU.map((item) => (
                <Link
                  key={item.id}
                  href="#"
                  className={`flex flex-col items-center justify-center gap-5 rounded-xl ${item.bg} py-3 md:py-5 w-full hover:opacity-90 transition-opacity text-center`}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={30}
                    height={30}
                    className="object-contain w-auto h-7.5"
                  />

                  <span className="text-xs md:text-sm lg:text-[14px] font-normal text-[#222222] leading-tight whitespace-pre-line">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>

            {/* 2. Job List */}
            <div className="flex flex-col">
              {JOB_LIST.map((job) => (
                <Link
                  key={job.id}
                  href="#"
                  className="py-4 border-b border-[#E4F1FF] hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#125BFF]" />
                    <span className="text-xs md:text-sm text-[#A0A7B4] font-medium group-hover:underline">
                      {job.company}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg lg:text-[21px] font-normal text-gray-900 line-clamp-1 group-hover:text-[#FF5F00] transition-colors">
                    {job.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>

          {/* === RIGHT COLUMN: EVENTS & CALENDAR === */}
          <div className="bg-white rounded-xl px-2.5 py-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl md:text-2xl lg:text-[28px] font-medium text-[#2B2B2B] tracking-tighter">
                행사/공모전
              </h2>
              <Link
                href="#"
                className="bg-[#FFDACB] hover:bg-[#fcc6b1] text-gray-700 w-32 h-9 rounded-full flex items-center justify-evenly transition-colors"
              >
                모두 보기
                <ArrowRight size={18} className="text-gray-600" />
              </Link>
            </div>

            {/* Calendar Widget */}
            <div className="w-full">
              {/* Calendar Nav */}
              <div className="flex items-center justify-between px-4 mb-6">
                <button className="p-1 hover:bg-gray-100 rounded-full text-black">
                  <ChevronLeft size={24} />
                </button>
                <span className="tracking-tight text-base md:text-xl lg:text-[22px] font-semibold text-gray-900">
                  2025.11
                </span>
                <button className="p-1 hover:bg-gray-100 rounded-full text-black">
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Week Days Header */}
              <div className="grid grid-cols-7 text-center mb-5">
                {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                  (day, i) => (
                    <span
                      key={day}
                      className={`text-xs md:text-sm lg:text-[14px] font-semibold tracking-tight ${i >= 5 ? "text-[#FF4E03]" : "text-[#222222]"}`}
                    >
                      {day}
                    </span>
                  ),
                )}
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 gap-y-2 mb-6">
                {CALENDAR_DAYS.map((date, idx) => (
                  <div
                    key={idx}
                    className="flex justify-center items-center h-10"
                  >
                    <button
                      className={`
                        w-8 h-8 rounded-full text-xs md:text-sm lg:text-[16px] font-normal tracking-tight flex items-center justify-center transition-all
                        ${date.prevMonth ? "text-gray-300" : ""}
                        ${date.type === "selected" ? "bg-[#FF5F00] text-white shadow-md" : ""}
                        ${date.type === "event" ? "bg-[#FFEDE6] text-gray-900" : ""}
                        ${date.type === "normal" && !date.prevMonth ? "hover:bg-gray-100 text-gray-600" : ""}
                      `}
                    >
                      {date.day}
                    </button>
                  </div>
                ))}
              </div>

              {/* Event Counter Bar */}
              <div className="bg-[#F2F2F2] rounded-lg py-1.5 px-4 text-center text-xs md:text-sm lg:text-[16px] text-[#696969] mb-6">
                오늘 이벤트{" "}
                <span className="font-medium text-[#FF4E03]">2개</span>
              </div>

              {/* Selected Date Events */}
              <div className="hidden md:flex flex-col md:flex-row gap-3 md:gap-4 items-start">
                {/* Date Display */}
                <div className="flex flex-col gap-1">
                  <span className="text-[#FF4E03] font-medium text-sm md:text-base lg:text-[18px] leading-none">
                    Tuesday
                  </span>
                  <span className="text-[#FF4E03] font-medium text-sm md:text-base lg:text-[18px] leading-none">
                    2025.11.18
                  </span>
                </div>

                {/* Event List */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4E03] mt-2.5 shrink-0" />
                    <p className="text-xs md:text-sm lg:text-[16px] text-[#696969] tracking-tight">
                      2025 First Aviation Leisure Industry Job Openings
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4E03] mt-2.5 shrink-0" />
                    <p className="text-xs md:text-sm lg:text-[16px] text-[#696969] tracking-tight">
                      2025 Drone & Urban Air Mobility Expo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
