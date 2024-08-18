import Image from "next/image";
import Navigation from "@/components/layouts/Navigation";
import MobileMenuBar from "@/components/layouts/MobileMenuBar";
import SidebarProfile from "@/components/layouts/SidebarProfile";
import Nav from "@/components/layouts/Nav";
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
      <div className="relative pt-10 minfo__app max-xl:pt-20">
        <div className="menu-overlay fixed top-0 left-0 w-full h-full bg-black/60 transition-all duration-200 z-999 opacity-0 invisible [&.is-menu-open]:visible [&.is-menu-open]:opacity-100"></div>
        <div className="max-lg:px-4">
          <MobileMenuBar />
          <SidebarProfile />
          <Navigation />
          <Nav />
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

          <footer className="mx-auto minfo__contentBox max-w-container xl:max-2xl:max-w-65rem">
            <div className="footer-container text-center py-6 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">
              <p>
                Copyright by
                <a href="#" className="transition-colors">
                  @domain.com
                </a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
