import { FC } from "react";

const AboutSection: FC = () => {
  return (
    <section data-scroll-index="1" id="about">
      <div className="about-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-user text-theme"></i>
          ABOUT ME
        </div>
        <div className="mt-7 md:mt-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            About <span className="font-semibold text-theme">Me</span>
          </h2>
          <p className="max-w-2xl mt-4 md:mt-6 subtitle">
            Hi, my name is
            <span className="text-black dark:text-white">Brown Reddick</span>
            and I began using WordPress when first began. spent most of my
            waking hours for the last ten years designing, programming and
            operating
            <span className="text-black dark:text-white"> WordPress</span>
            sites go beyond with exclusive designer.
          </p>
        </div>
        <div className="mt-6 section-content">
          <div className="inline-flex flex-wrap items-center gap-2 mb-5 text-sm md:gap-4 *:inline-block *:px-3.5 *:py-2 *:transition *:duration-300 *:border *:border-dashed *:text-black dark:*:text-white/70 *:border-platinum dark:*:border-greyBlack *:rounded-3xl md:*:px-5 md:*:py-2">
            <a href="#" className="hover:text-theme dark:hover:text-white">
              HTML5 & CSS3 (94%)
            </a>
            <a href="#" className="hover:text-theme dark:hover:text-white">
              Bootstrap (98%)
            </a>
            <a href="#" className="hover:text-theme dark:hover:text-white">
              TailwindCSS (90%)
            </a>
          </div>

          <ul className="grid mt-4 mb-10 text-sm lg:mt-6 md:grid-cols-2 gap-x-8 gap-y-3 *:flex *:items-center">
            <li>
              <span className="flex-[0_0_6rem]">Phone</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">
                +(2) 870 174 302
              </span>
            </li>
            <li>
              <span className="flex-[0_0_6rem]">Email</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">
                info@example.com
              </span>
            </li>
            <li>
              <span className="flex-[0_0_6rem]">Skype</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">brown@com</span>
            </li>
            <li>
              <span className="flex-[0_0_6rem]">Github</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">
                github.com/user
              </span>
            </li>
            <li>
              <span className="flex-[0_0_6rem]">Language</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">
                English, Dutch, Spanish
              </span>
            </li>
          </ul>

          <ul className="grid grid-cols-2 gap-6 counters md:grid-cols-4 xl:gap-8">
            <li>
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>185</span>+
              </div>
              <div className="text-sm">Years Of Experience</div>
            </li>
            <li>
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>12</span>+
              </div>
              <div className="text-sm">Handled Projects</div>
            </li>
            <li>
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>05</span>+
              </div>
              <div className="text-sm">Open Source Libraries</div>
            </li>
            <li>
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>18</span>
              </div>
              <div className="text-sm">Awards Won</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
