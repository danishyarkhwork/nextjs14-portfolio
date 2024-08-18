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
import StyleSwitcher from "@/components/common/StyleSwitcher";
import ContactSection from "@/components/main/ContactSection";

export default function Home() {
  return (
    <>
      <div className="custom_cursor_one fixed top-0 left-0 w-8 h-8 border border-gray-400 rounded-full pointer-events-none"></div>
      <div className="custom_cursor_two w-1 h-1 rounded-full border border-gray-400 bg-metborder-gray-400 fixed pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div id="preloader">
        <div className="loader_line"></div>
        <div className="absolute w-20 h-20 transition-all delay-300 -translate-x-1/2 -translate-y-1/2 rounded-full logo top-1/2 left-1/2 bg-nightBlack border-greyBlack flex-center">
          <img src="assets/img/site-logo.svg" alt="Minfo" />
        </div>
      </div>

      <div className="relative pt-10 minfo__app max-xl:pt-20">
        <div className="menu-overlay fixed top-0 left-0 w-full h-full bg-black/60 transition-all duration-200 z-999 opacity-0 invisible [&.is-menu-open]:visible [&.is-menu-open]:opacity-100"></div>
      </div>
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
          <PortfolioSection />
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

      <div className="bg-lines fixed inset-0 -z-1 md:max-xl:max-w-[45rem] xl:max-w-60rem 2xl:max-w-container mx-auto max-sm:px-8 sm:max-xl:px-12">
        <div className="line-wrapper max-w-[1130px] w-full h-full ml-auto 2xl:-mr-24 relative flex justify-between [&>*]:w-px [&>*]:h-full [&>*]:border-r [&>*]:border-dashed [&>*]:border-slate-300 dark:[&>*]:border-metalBlack [&>*]:relative [&>*]:before:absolute [&>*]:before:bg-theme [&>*]:before:rotate-45 [&>*]:before:-left-1 [&>*]:before:w-2 [&>*]:before:h-2">
          <div className="line1 before:animate-top_bottom"></div>
          <div className="line2 before:bottom-0 before:animate-bottom_top before:animate-delay-3s"></div>
          <div className="line3 before:animate-top_bottom before:animate-delay-3s"></div>
          <div className="line4 before:bottom-0 before:animate-bottom_top before:animate-delay-2s"></div>
        </div>
      </div>
      <StyleSwitcher />
    </>
  );
}
