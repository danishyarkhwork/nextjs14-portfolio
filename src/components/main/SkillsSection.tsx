import { FC } from "react";

const SkillsSection: FC = () => {
  return (
    <section data-scroll-index="0" id="skills">
      <div className="service-section relative px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-code text-theme"></i>
          SKILLS
        </div>
        <div className="mt-7 md:mt-10">
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            My <span className="font-semibold text-theme">Skills</span>
          </h2>
          <p className="max-w-2xl mt-4 md:mt-6">
            I have honed a diverse skill set over the years, allowing me to
            tackle a wide range of challenges and projects. From frontend
            development to backend programming, I am proficient in a variety of
            technologies.
          </p>
        </div>
        <div className="mt-8">
          <ul className="space-y-4">
            <li>
              <div className="flex justify-between text-sm">
                <span>HTML & CSS</span>
                <span>95%</span>
              </div>
              <div className="relative mt-1.5 w-full h-2 rounded-2xl bg-platinum dark:bg-greyBlack200">
                <div
                  className="absolute top-0 left-0 h-full rounded-2xl bg-theme"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between text-sm">
                <span>JavaScript</span>
                <span>90%</span>
              </div>
              <div className="relative mt-1.5 w-full h-2 rounded-2xl bg-platinum dark:bg-greyBlack200">
                <div
                  className="absolute top-0 left-0 h-full rounded-2xl bg-theme"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between text-sm">
                <span>React.js</span>
                <span>85%</span>
              </div>
              <div className="relative mt-1.5 w-full h-2 rounded-2xl bg-platinum dark:bg-greyBlack200">
                <div
                  className="absolute top-0 left-0 h-full rounded-2xl bg-theme"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between text-sm">
                <span>Node.js</span>
                <span>80%</span>
              </div>
              <div className="relative mt-1.5 w-full h-2 rounded-2xl bg-platinum dark:bg-greyBlack200">
                <div
                  className="absolute top-0 left-0 h-full rounded-2xl bg-theme"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between text-sm">
                <span>TypeScript</span>
                <span>85%</span>
              </div>
              <div className="relative mt-1.5 w-full h-2 rounded-2xl bg-platinum dark:bg-greyBlack200">
                <div
                  className="absolute top-0 left-0 h-full rounded-2xl bg-theme"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
