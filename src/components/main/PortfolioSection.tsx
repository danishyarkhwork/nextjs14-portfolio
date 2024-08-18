import { FC } from "react";
import Image from "next/image";

const PortfolioSection: FC = () => {
  return (
    <section data-scroll-index="0" id="portfolio">
      <div className="portfolio-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-briefcase text-theme"></i>
          PORTFOLIO
        </div>
        <div className="mt-7 md:mt-10">
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            My <span className="font-semibold text-theme">Portfolio</span>
          </h2>
          <p className="max-w-2xl mt-4 md:mt-6">
            Take a look at some of the projects I have worked on. These examples
            showcase my skills and experience in web development, design, and
            more.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-9">
          <div className="relative">
            <Image
              src="/assets/img/portfolio-1.jpg"
              alt="Portfolio 1"
              className="rounded-4xl"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-4xl">
              <a href="#" className="text-white text-lg font-medium">
                Project 1
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/img/portfolio-2.jpg"
              alt="Portfolio 2"
              className="rounded-4xl"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-4xl">
              <a href="#" className="text-white text-lg font-medium">
                Project 2
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/img/portfolio-3.jpg"
              alt="Portfolio 3"
              className="rounded-4xl"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-4xl">
              <a href="#" className="text-white text-lg font-medium">
                Project 3
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/img/portfolio-4.jpg"
              alt="Portfolio 4"
              className="rounded-4xl"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-4xl">
              <a href="#" className="text-white text-lg font-medium">
                Project 4
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/img/portfolio-5.jpg"
              alt="Portfolio 5"
              className="rounded-4xl"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-4xl">
              <a href="#" className="text-white text-lg font-medium">
                Project 5
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/img/portfolio-6.jpg"
              alt="Portfolio 6"
              className="rounded-4xl"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-4xl">
              <a href="#" className="text-white text-lg font-medium">
                Project 6
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
