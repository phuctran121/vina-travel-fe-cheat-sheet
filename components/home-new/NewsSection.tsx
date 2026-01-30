import NewsSliderBlock from "./news/NewsSliderBlock";
import { NOTICES_DATA, BUSINESS_DATA } from "./news/data";

// --- MAIN SECTION COMPONENT ---
export default function NewsSection() {
  return (
    <section className="w-full bg-[#F7F7F7] font-sans">
      <div className="container mx-auto px-4 lg:px-38">
        {/* BLOCK 1: NOTICES */}
        <NewsSliderBlock
          title="공지사항"
          tags={["공지사항", "사업공고", "드론구인"]}
          data={NOTICES_DATA}
        />

        {/* BLOCK 2: BUSINESS */}
        <NewsSliderBlock
          title="사업공고"
          tags={["모두", "소식", "이벤트"]}
          data={BUSINESS_DATA}
          showAllOption={true}
        />
      </div>
    </section>
  );
}
