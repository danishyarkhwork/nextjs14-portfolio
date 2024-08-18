import { FC } from "react";

const ResumeSection: FC = () => {
  return (
    <section data-scroll-index="4" id="about">
      <div className="resume-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-folder-open text-theme"></i>
          RESUME
        </div>
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Work <span className="font-semibold text-theme">Experience</span>
          </h2>
          <p className="mt-4 md:mt-6 subtitle">
            I have worked with large local and international companies, gaining
            experience in diverse environments and collaborating with
            cross-functional teams. This exposure has enhanced my ability to
            adapt to different business cultures and market dynamics.
          </p>
        </div>

        <div className="experience">
          <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2 *:p-5 *:border *:rounded-xl md:*:flex max-md:*:space-y-2 *:border-platinum dark:*:border-metalBlack md:*:border-0 md:*:p-0 md:*:rounded-none">
            <li>
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                  Baheer Group
                </h6>
                <p className="text-[13px] md:text-sm text-theme">
                  April 13, 2023 - Current
                </p>
              </div>
              <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                <h4 className="text-lg xl:text-xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                  Full Stack Web Developer
                </h4>
                <p>
                  Front-end development for Enterprise Resource Planning (ERP)
                  System using HTML, Tailwind CSS, Bootstrap, React and other
                  related tools
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                  Qader Zaher Group (QZG)
                </h6>
                <p className="text-[13px] md:text-sm text-theme">
                  Oct 19, 2022 - April 12, 2023
                </p>
              </div>
              <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                <h4 className="text-lg xl:text-xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                  Web Developer & SEO Analyst
                </h4>
                <p>
                  Regularly update and maintain websites to ensure optimal
                  performance and user experience. Develop websites for new
                  projects, leveraging skills in WordPress.
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                  Afghan Altruistic Humanitarian Organization (AAHO)
                </h6>
                <p className="text-[13px] md:text-sm text-theme">
                  March 20, 2022 – Sep 02, 2022
                </p>
              </div>
              <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                <h4 className="text-lg xl:text-xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                  Web Developer & Social Media Manager
                </h4>
                <p>
                  Regularly update and maintain websites to ensure optimal
                  performance and user experience. Develop websites for new
                  projects, leveraging skills in WordPress, HTML, CSS,
                  JavaScript, and PHP with MySQL.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <br />
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            My <span className="font-semibold text-theme">Education</span>
          </h2>
          <p className="mt-4 md:mt-6 subtitle">
            I am committed to continuous learning and education, striving to
            stay up-to-date with the latest advancements in my field. My goal is
            to be among the best in the community, enabling me to serve others
            effectively and contribute meaningfully to society. By constantly
            expanding my knowledge and skills, I ensure that I can provide the
            highest level of service and make a positive impact on those around
            me.
          </p>
        </div>

        <div className="experience">
          <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2 *:p-5 *:border *:rounded-xl md:*:flex max-md:*:space-y-2 *:border-platinum dark:*:border-metalBlack md:*:border-0 md:*:p-0 md:*:rounded-none">
            <li>
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                  Bakhtar University
                </h6>
                <p className="text-[13px] md:text-sm text-theme">2023-2025</p>
              </div>
              <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                <h4 className="text-lg xl:text-xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                  Master in Computer Science (MCS)
                </h4>
                <p>
                  Pursuing Master in Computer Science (MCS) 2 nd Year at Bakhtar
                  University, Kabul.
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                  Khurasan University
                </h6>
                <p className="text-[13px] md:text-sm text-theme">2015-2019</p>
              </div>
              <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                <h4 className="text-lg xl:text-xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                  Bachelor in Computer Science
                </h4>
                <p>
                  Bachelor in Computer Science (BCS) with distinction, Khurasan
                  University, Nangarhar (2015-2019)
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                  Khurasan University
                </h6>
                <p className="text-[13px] md:text-sm text-theme">2016-2017</p>
              </div>
              <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                <h4 className="text-lg xl:text-xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                  Diploma in English Language
                </h4>
                <p>
                  Diploma in English Language (DEL), Khurasan University DEL
                  department, Nangarhar (2016-2017)
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
