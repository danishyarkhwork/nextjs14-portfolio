import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioSection: FC = () => {
  return (
    <section data-scroll-index="5" id="portfolio">
      <div className="portfolio-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-tasks-alt text-theme"></i>
          PORTFOLIO
        </div>
        <div className="mt-5 mb-8 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Featured <span className="font-semibold text-theme">Projects</span>
          </h2>
          <p className="mt-4 md:mt-6 subtitle">
            Explore my latest projects, showcasing my skills in full-stack web
            development and WordPress. Each project highlights my ability to
            deliver responsive, user-friendly websites and applications, with a
            focus on quality, innovation, and performance.
          </p>
        </div>

        <div className="portfolio_wrapper grid sm:grid-cols-2 gap-4 lg:gap-7.5 *:relative *:z-1">
          <div className="item md:col-span-2 group">
            <a
              href="project-single.html"
              className="block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
            >
              <div className="img-wrapper">
                <img
                  src="assets/img/portfolio/qamar-islamic-institute.PNG"
                  className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                  alt="portfolio"
                />
                <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
              </div>
              <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                Qamar Islamic Institute
              </div>
            </a>
            <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
                >
                  WordPress Website
                </a>
              </li>
            </ul>
          </div>

          <div className="item md:col-span-2 group">
            <a
              href="project-single.html"
              className="block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
            >
              <div className="img-wrapper">
                <img
                  src="assets/img/portfolio/mizan-academy.PNG"
                  className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                  alt="portfolio"
                />
                <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
              </div>
              <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                Mizan Online Academy
              </div>
            </a>
            <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
                >
                  WordPress Website
                </a>
              </li>
            </ul>
          </div>

          <div className="item md:col-span-2 group">
            <a
              href="project-single.html"
              className="block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
            >
              <div className="img-wrapper">
                <img
                  src="assets/img/portfolio/baheer-group.PNG"
                  className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                  alt="portfolio"
                />
                <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
              </div>
              <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                Baheer Group of Companies
              </div>
            </a>
            <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
                >
                  WordPress Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center more-blogs md:mt-13">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
          >
            More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
