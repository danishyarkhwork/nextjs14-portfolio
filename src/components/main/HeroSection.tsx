import Image from "next/image";
import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <section data-scroll-index="0" id="home">
      <div className="hero-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-home text-theme"></i>
          INTRODUCE
        </div>
        <div className="items-center gap-6 hero-content md:flex xl:gap-10">
          <div className="pt-7 lg:pt-8 max-w-[30rem]">
            <h1 className="text-[32px] lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold text-black dark:text-white leading-1.27 mb-4 lg:mb-5">
              I Craft The <br />
              <span className="text-theme">Digital Landscape</span>
            </h1>
            <p>
              I am a{" "}
              <span className="font-medium text-black dark:text-white/90">
                Frontend Developer
              </span>{" "}
              at heart, and I create features that are best suited for the job
              at hand.
            </p>
            <ul className="flex items-center mt-4 lg:mt-5 space-x-3">
              <li className="flex items-center">
                <i className="mr-2 fal fa-check-double text-theme"></i>
                Available for work
              </li>
              <li className="flex items-center">
                <i className="mr-2 fal fa-check-double text-theme"></i>
                Full Time Job
              </li>
            </ul>
            <ul className="mt-7">
              <li>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-theme py-4 px-7 lg:px-9 rounded-4xl text-white text-[15px] md:text-base font-medium transition-all duration-300 hover:shadow-theme_shadow"
                >
                  <i className="fal fa-paper-plane"></i>
                  HIRE ME
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-[0_0_20.3rem] hidden md:block">
            <Image
              src="/assets/img/hero-img-1.png"
              alt="Hero Image - Light Mode"
              className="dark:hidden"
              width={500}
              height={500}
            />
            <Image
              src="/assets/img/hero-img-2.png"
              alt="Hero Image - Dark Mode"
              className="hidden dark:block"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="mb-2 mt-14 xl:mb-0 xl:mt-20">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="hidden md:col-span-2 md:inline-block">
              <h6 className="font-medium text-black dark:text-white/80 text-sm border-l border-theme pl-4">
                Trusted companies
              </h6>
            </div>
            <div className="col-span-10 logo-slider">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="#" className="transition duration-200 flex-center">
                      <img
                        src="assets/img/partners/logo1.svg"
                        alt="Partner Name"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="transition duration-200 flex-center">
                      <img
                        src="assets/img/partners/logo2.svg"
                        alt="Partner Name"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="transition duration-200 flex-center">
                      <img
                        src="assets/img/partners/logo3.svg"
                        alt="Partner Name"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="transition duration-200 flex-center">
                      <img
                        src="assets/img/partners/logo4.svg"
                        alt="Partner Name"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="transition duration-200 flex-center">
                      <img
                        src="assets/img/partners/logo2.svg"
                        alt="Partner Name"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="transition duration-200 flex-center">
                      <img
                        src="assets/img/partners/logo4.svg"
                        alt="Partner Name"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="transition duration-200 flex-center">
                      <img
                        src="assets/img/partners/logo2.svg"
                        alt="Partner Name"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="transition duration-200 flex-center">
                      <img
                        src="assets/img/partners/logo4.svg"
                        alt="Partner Name"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="#" className="transition duration-200 flex-center">
                      <img
                        src="assets/img/partners/logo2.svg"
                        alt="Partner Name"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
