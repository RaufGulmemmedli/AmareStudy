import { HeroCarousel } from "@/containers/home/hero-carousel";
import { StatsSection } from "@/containers/home/stats-section";
import { FeaturedCourses } from "@/containers/home/featured-courses";
import { AboutPreview } from "@/containers/home/about-preview";
import { WhyChooseUs } from "@/containers/home/why-choose-us";
import { Testimonials } from "@/containers/home/testimonials";
import { PartnerSlider } from "@/containers/home/partner-slider";

export default function HomePage() {
  return (
    <div>
      <HeroCarousel />
      <StatsSection />
      <FeaturedCourses />
      <AboutPreview />
      <WhyChooseUs />
      <Testimonials />
      <PartnerSlider />
    </div>
  );
}
