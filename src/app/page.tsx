import Image from "next/image";
import HeroSection from "@/components/main/HeroSection";
import AboutSection from "@/components/main/AboutSection";
import PortfolioSection from "@/components/main/PortfolioSection";
import ServicesSection from "@/components/main/ServicesSection";
import SkillsSection from "@/components/main/SkillsSection";
import TestimonialsSection from "@/components/main/TestimonialsSection";
import ContactSection from "@/components/main/ContactSection";
import BlogSection from "@/components/main/BlogSection";
import ResumeSection from "@/components/main/ResumeSection";

export default function Home() {
  return (
    <>
      <div className="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem *:py-5 xl:*:py-3.5 *:max-w-content max-xl:*:mx-auto xl:*:ml-auto xl:max-2xl:*:max-w-50rem">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ResumeSection />
        <PortfolioSection />
        <BlogSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </>
  );
}
