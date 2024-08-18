import { FC } from "react";
import Image from "next/image";

const skills = [
  { name: "HTML5", percentage: 90, imgSrc: "/assets/img/skill/html.svg" },
  { name: "CSS3", percentage: 80, imgSrc: "/assets/img/skill/css.svg" },
  { name: "JavaScript", percentage: 60, imgSrc: "/assets/img/skill/js.svg" },
  {
    name: "TailwindCSS",
    percentage: 90,
    imgSrc: "/assets/img/skill/tailwind.svg",
  },
  { name: "jQuery", percentage: 90, imgSrc: "/assets/img/skill/jquery.svg" },
  { name: "Figma", percentage: 90, imgSrc: "/assets/img/skill/figma.svg" },
];

const SkillsSection: FC = () => {
  return (
    <section data-scroll-index="3" id="skills">
      <div className="service-section relative px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-graduation-cap text-theme"></i>
          SKILLS
        </div>
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            My <span className="font-semibold text-theme">Skills</span>
          </h2>
          <p className="mt-4 md:mt-6 subtitle">
            I specialize in front-end and back-end web development, with
            expertise in WordPress, HTML5, CSS3, JavaScript, PHP, and more. I’m
            dedicated to creating visually appealing, functional, and optimized
            websites while staying current with the latest technologies.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-5">
                <div className="w-8">
                  <Image
                    alt={skill.name}
                    loading="lazy"
                    width={100}
                    height={100}
                    src={skill.imgSrc}
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="flex-1">
                  <h5 className="mb-2 text-black dark:text-white flex items-center justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </h5>
                  <div
                    dir="ltr"
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuetext={`${skill.percentage}%`}
                  >
                    <div
                      style={{
                        height: "6px",
                        background: "rgb(224, 224, 222)",
                        borderRadius: "50px",
                        width: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "6px",
                          width: `${skill.percentage}%`,
                          background: "rgb(0, 188, 145)",
                          transition: "width 1s ease-in-out",
                          borderRadius: "inherit",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <span
                          style={{
                            padding: "5px",
                            color: "rgb(0, 188, 145)",
                            fontWeight: "bold",
                            fontSize: "15px",
                            display: "initial",
                          }}
                        >
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
