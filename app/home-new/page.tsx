import HeroBanner from "@/components/home-new/HeroBanner";
import DroneStoriesSection from "@/components/home-new/DroneStoriesSection";
import LinkedSystemsSection from "@/components/home-new/LinkedSystemsSection";
import HelpdeskAndReelsSection from "@/components/home-new/HelpdeskAndReelsSection";
import NewsSection from "@/components/home-new/NewsSection";
import GeneralEventsSection from "@/components/home-new/GeneralEventsSection";

export default function Home() {
  return (
    <div className="pb-12">
      <HeroBanner />
      <DroneStoriesSection />
      <LinkedSystemsSection />
      <GeneralEventsSection />
      <HelpdeskAndReelsSection />
      <NewsSection />
    </div>
  );
}
