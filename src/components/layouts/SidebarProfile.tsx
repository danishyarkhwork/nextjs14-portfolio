// components/SidebarProfile.tsx
import Image from "next/image";
import Link from "next/link";

const SidebarProfile: React.FC = () => {
  return (
    <div className="w-full mx-auto minfo__sidebar__wrapper xl:fixed xl:top-1/2 xl:left-4 2xl:left-14 xl:-translate-y-1/2 md:max-w-sidebar xl:max-2xl:max-w-xs z-999">
      <div className="p-3 max-xl:mb-3 overflow-hidden minfo__sidebar bg-white dark:bg-nightBlack rounded-2xl">
        <div className="mx-4 mt-12 text-center user-info lg:mx-6">
          <Link
            href="/"
            className="w-36 h-36 mb-2.5 block mx-auto border-6 border-platinum dark:border-[#2f2f2f] overflow-hidden rounded-full *:w-full *:h-full *:rounded-full"
          >
            <img
              src="assets/img/user-sidebar-thumb.png"
              className="hidden dark:block"
              alt="Brown Reddick"
            />
            <img
              src="assets/img/user-sidebar-thumb-light.png"
              className="dark:hidden"
              alt="Khalid Danishyar"
            />
          </Link>
          <h6 className="mb-1 text-lg font-semibold text-black dark:text-white name">
            Khalid Danishyar
          </h6>
          <div className="leading-none cd-headline clip is-full-width">
            <h6 className="text-sm cd-words-wrapper designation text-theme after:!bg-theme *:font-normal">
              <b className="is-visible">Web Developer</b>
              <b>WordPress Expert</b>
              <b>Lecturer</b>
            </h6>
          </div>
        </div>
        <div className="pt-6 mx-4 border-t lg:mx-6 user-meta-info md:mx-7 my-7 border-platinum dark:border-metalBlack">
          <ul className="space-y-3 *:flex *:text-sm">
            <li>
              <span className="flex-1 font-medium text-black dark:text-white">
                Residence:
              </span>
              <span>Afghanistan</span>
            </li>
            <li>
              <span className="flex-1 font-medium text-black dark:text-white">
                City:
              </span>
              <span>Kabul</span>
            </li>
            <li>
              <span className="flex-1 font-medium text-black dark:text-white">
                Age:
              </span>
              <span>27</span>
            </li>
          </ul>
        </div>

        <div className="px-4 py-5 lg:py-6 lg:px-6 rounded-2xl md:px-8 bg-flashWhite dark:bg-metalBlack">
          <div className="text-sm font-medium text-black dark:text-white">
            Skills
          </div>
          <div className="flex items-center justify-between my-4 space-x-4 skills_circle *:space-y-2 *:text-center">
            <div className="progressCircle">
              <div
                className="relative w-12 h-12 circle"
                data-percent="90"
                data-circlefill="#00BC91"
                data-circleempty="#777777"
              >
                <div className="absolute inset-0 text-[13px] font-medium label flex-center">
                  90%
                </div>
              </div>
              <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">
                HTML
              </p>
            </div>
            <div className="progressCircle">
              <div
                className="relative w-12 h-12 circle"
                data-percent="80"
                data-circlefill="#00BC91"
                data-circleempty="#777777"
              >
                <div className="absolute inset-0 text-[13px] font-medium label flex-center">
                  90%
                </div>
              </div>
              <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">
                CSS
              </p>
            </div>
            <div className="progressCircle">
              <div
                className="relative w-12 h-12 circle"
                data-percent="80"
                data-circlefill="#00BC91"
                data-circleempty="#777777"
              >
                <div className="absolute inset-0 text-[13px] font-medium label flex-center">
                  85%
                </div>
              </div>
              <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">
                JS
              </p>
            </div>
            <div className="progressCircle">
              <div
                className="relative w-12 h-12 circle"
                data-percent="90"
                data-circlefill="#00BC91"
                data-circleempty="#777777"
              >
                <div className="absolute inset-0 text-[13px] font-medium label flex-center">
                  80%
                </div>
              </div>
              <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">
                PHP
              </p>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="assets/Khalid-Danishyar-Resume.pdf"
              download
              target="_blank"
              className="text-center text-sm border border-theme bg-theme flex items-center justify-center gap-2 text-white rounded-4xl py-3.5 transition duration-300 text-[15px] font-semibold hover:bg-themeHover hover:border-themeHover"
            >
              DOWNLOAD CV
              <span className="animate-bounce">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56m0 64.1 64 63.9 64-63.9M256 224v224.03"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        <svg className="absolute w-0 h-0">
          <clipPath
            id="my-clip-path"
            clipPathUnits="objectBoundingBox"
            stroke="white"
            stroke-width="2"
          >
            <path d="M0.001,0.031 C0.001,0.014,0.026,0.001,0.055,0.001 H0.492 C0.506,0.001,0.52,0.004,0.53,0.009 L0.61,0.052 C0.62,0.057,0.634,0.06,0.649,0.06 H0.947 C0.977,0.06,1,0.074,1,0.091 V0.971 C1,0.987,0.977,1,0.947,1 H0.055 C0.026,1,0.001,0.987,0.001,0.971 V0.031"></path>
          </clipPath>
        </svg>
      </div>
    </div>
  );
};

export default SidebarProfile;
