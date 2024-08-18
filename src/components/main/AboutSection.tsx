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
          <p className="mt-4 md:mt-6 subtitle">
            👋 Hello, I’m Khalid Danishyar, a Full Stack Web Developer and
            WordPress Expert with five years of commercial experience creating
            successful websites and web-based applications. 🎓 I graduated with
            a Bachelor of Computer Science (BCS) from Khurasan University in
            Jalalabad, Afghanistan, and currently, I’m pursuing my Master’s
            degree from Bakhtar University in Kabul.
          </p>

          <p className="mt-4 md:mt-6 subtitle">
            🚀 I specialize in website design and development, with expertise in
            WordPress, HTML5, CSS3, Bootstrap, Tailwind CSS, Figma, JavaScript,
            jQuery, Vue.js, React, AngularJS, Alpine.js, PHP, Laravel, and other
            web development tools. I am also skilled in SEO (Search Engine
            Optimization), Blogging, teaching, data analysis and reporting, and
            other technical activities. 💻 I have a passion for web programming
            and am always eager to learn new technologies and techniques.
          </p>

          <p className="mt-4 md:mt-6 subtitle">
            💬 I am always available to discuss your project and see how I can
            help you achieve your goals. You can reach me via WhatsApp at +93 70
            332 5036. I look forward to hearing from you and helping you bring
            your web development projects to life.
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
                +93 (0) 70 332 5036
              </span>
            </li>
            <li>
              <span className="flex-[0_0_6rem]">Email</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">
                info@khaliddanishyar.com
              </span>
            </li>
            <li>
              <span className="flex-[0_0_6rem]">Github</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">
                github.com/danishyarkhwork
              </span>
            </li>
            <li>
              <span className="flex-[0_0_6rem]">Language</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">
                Pashto, Dari, English
              </span>
            </li>
          </ul>

          <ul className="grid grid-cols-2 gap-6 counters md:grid-cols-4 xl:gap-8">
            <li>
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>6</span>+
              </div>
              <div className="text-sm">Years Of Experience</div>
            </li>
            <li>
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>42</span>+
              </div>
              <div className="text-sm">Completed Projects</div>
            </li>
            <li>
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>45</span>+
              </div>
              <div className="text-sm">Happy Customers</div>
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
