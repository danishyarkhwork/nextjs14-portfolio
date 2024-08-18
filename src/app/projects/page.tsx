import Link from "next/link";

export default function Home() {
  return (
    <div className="relative pt-10 minfo__app max-xl:pt-18">
      <div className="menu-overlay fixed top-0 left-0 w-full h-full bg-black/60 transition-all duration-200 z-999 opacity-0 invisible [&.is-menu-open]:visible [&.is-menu-open]:opacity-100 "></div>
      <div className="max-lg:px-4">
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-2 px-3 bg-white/10 mobile-menu-bar sm:px-6 backdrop-blur-md xl:hidden">
          <div className="text-lg font-medium name">
            <a
              href="index.html"
              className="flex items-center gap-2 text-black dark:text-white"
            >
              <img src="assets/img/site-logo.svg" alt="Minfo" />
              <span>Minfo</span>
            </a>
          </div>

          <button
            className="w-12 h-12 border rounded-full hamburger menu_toggle bg-white dark:bg-nightBlack border-platinum dark:border-greyBlack flex-center"
            type="button"
            aria-label="Open Mobile Menu"
          >
            <svg
              viewBox="0 0 20 12"
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.33333 11.3333C5.33333 11.1565 5.40357 10.987 5.5286 10.8619C5.65362 10.7369 5.82319 10.6667 6 10.6667H19.3333C19.5101 10.6667 19.6797 10.7369 19.8047 10.8619C19.9298 10.987 20 11.1565 20 11.3333C20 11.5101 19.9298 11.6797 19.8047 11.8047C19.6797 11.9298 19.5101 12 19.3333 12H6C5.82319 12 5.65362 11.9298 5.5286 11.8047C5.40357 11.6797 5.33333 11.5101 5.33333 11.3333ZM2.66667 6C2.66667 5.82319 2.7369 5.65362 2.86193 5.5286C2.98695 5.40357 3.15652 5.33333 3.33333 5.33333H16.6667C16.8435 5.33333 17.013 5.40357 17.1381 5.5286C17.2631 5.65362 17.3333 5.82319 17.3333 6C17.3333 6.17681 17.2631 6.34638 17.1381 6.4714C17.013 6.59643 16.8435 6.66667 16.6667 6.66667H3.33333C3.15652 6.66667 2.98695 6.59643 2.86193 6.4714C2.7369 6.34638 2.66667 6.17681 2.66667 6ZM0 0.666667C0 0.489856 0.0702379 0.320287 0.195262 0.195262C0.320286 0.070238 0.489856 0 0.666667 0H14C14.1768 0 14.3464 0.070238 14.4714 0.195262C14.5964 0.320287 14.6667 0.489856 14.6667 0.666667C14.6667 0.843478 14.5964 1.01305 14.4714 1.13807C14.3464 1.2631 14.1768 1.33333 14 1.33333H0.666667C0.489856 1.33333 0.320286 1.2631 0.195262 1.13807C0.0702379 1.01305 0 0.843478 0 0.666667Z"
                className="fill-theme dark:fill-white"
              />
            </svg>
          </button>
        </div>

        <div className="mobile-menu fixed top-0 -right-full w-full max-w-mobilemenu bg-flashWhite dark:bg-nightBlack z-999 h-full xl:hidden transition-all duration-300 [&.is-menu-open]:right-0 py-12 px-8 overflow-y-scroll">
          <button
            className="absolute flex items-center justify-center w-9 h-9 text-sm text-white rounded-full close-menu top-4 right-4 bg-greyBlack"
            aria-label="Close Menu"
          >
            <i className="fal fa-times"></i>
          </button>
          <div className="mb-6 text-lg font-medium text-black dark:text-white menu-title">
            Menu
          </div>
          <ul className="space-y-5 font-normal main-menu *:relative">
            <li className="group active">
              <a
                href="index.html#home"
                className="flex items-center space-x-2 group"
              >
                <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                  <i className="fal fa-home"></i>
                </span>
                <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                  Home
                </span>
              </a>
            </li>
            <li className="group">
              <a
                href="index.html#about"
                className="flex items-center space-x-2 group"
              >
                <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                  <i className="fal fa-user"></i>
                </span>
                <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                  About
                </span>
              </a>
            </li>
            <li className="group">
              <a
                href="index.html#service"
                className="flex items-center space-x-2 group"
              >
                <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                  <i className="fal fa-briefcase"></i>
                </span>
                <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                  Service
                </span>
              </a>
            </li>
            <li className="group">
              <a
                href="index.html#skill"
                className="flex items-center space-x-2 group"
              >
                <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                  <i className="fal fa-graduation-cap"></i>
                </span>
                <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                  Skills
                </span>
              </a>
            </li>
            <li className="group">
              <a
                href="index.html#resume"
                className="flex items-center space-x-2 group"
              >
                <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                  <i className="fal fa-file-alt"></i>
                </span>
                <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                  Resume
                </span>
              </a>
            </li>
            <li className="group">
              <a
                href="index.html#portfolio"
                className="flex items-center space-x-2 group"
              >
                <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                  <i className="fal fa-tasks-alt"></i>
                </span>
                <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                  Poftfolio
                </span>
              </a>
            </li>
            <li className="group">
              <a
                href="index.html#blog"
                className="flex items-center space-x-2 group"
              >
                <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                  <i className="fal fa-blog"></i>
                </span>
                <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                  Blog
                </span>
              </a>
            </li>
            <li className="group">
              <a
                href="index.html#testimonial"
                className="flex items-center space-x-2 group"
              >
                <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                  <i className="fal fa-comment-alt-lines"></i>
                </span>
                <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                  Testimonial
                </span>
              </a>
            </li>
            <li className="group">
              <a
                href="index.html#contact"
                className="flex items-center space-x-2 group"
              >
                <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
                  <i className="fal fa-envelope"></i>
                </span>
                <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
                  Contact
                </span>
              </a>
            </li>
          </ul>
          <br />
          <br />
          <div className="mb-4 font-medium text-black dark:text-white menu-title text-md">
            Get in Touch
          </div>

          <div className="flex items-center space-x-4 social-icons *:flex">
            <a href="#" title="Share with Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" title="Share with Linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" title="Share with X">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" title="Share with X">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="w-full mx-auto minfo__sidebar__wrapper xl:fixed xl:top-1/2 xl:left-4 2xl:left-14 xl:-translate-y-1/2 md:max-w-sidebar xl:max-2xl:max-w-xs z-999">
          <div className="p-3 max-xl:mb-3 overflow-hidden minfo__sidebar bg-white dark:bg-nightBlack rounded-2xl">
            <div className="mx-4 mt-12 text-center user-info lg:mx-6">
              <Link
                href="index.html"
                className="w-36 h-36 mb-2.5 block mx-auto border-6 border-platinum dark:border-[#2f2f2f] overflow-hidden rounded-full *:w-full *:h-full *:rounded-full"
              >
                <img
                  src="assets/img/user-sidebar-thumb.png"
                  className="hidden dark:block "
                  alt="Brown Reddick"
                />
                <img
                  src="assets/img/user-sidebar-thumb-light.png"
                  className="dark:hidden"
                  alt="Brown Reddick"
                />
              </Link>
              <h6 className="mb-1 text-lg font-semibold text-black dark:text-white name">
                Brown Reddick
              </h6>
              <div className="leading-none cd-headline clip is-full-width">
                <h6 className="text-sm cd-words-wrapper designation text-theme after:!bg-theme *:font-normal">
                  <b className="is-visible">Web Developer</b>
                  <b>Photographers</b>
                  <b>Web Designer</b>
                </h6>
              </div>
            </div>
            <div className="pt-6 mx-4 border-t lg:mx-6 user-meta-info md:mx-7 my-7 border-platinum dark:border-metalBlack">
              <ul className="space-y-3 *:flex *:text-sm">
                <li>
                  <span className="flex-1 font-medium text-black dark:text-white">
                    Residence:
                  </span>
                  <span>Canada</span>
                </li>
                <li>
                  <span className="flex-1 font-medium text-black dark:text-white">
                    City:
                  </span>
                  <span>Toronto</span>
                </li>
                <li>
                  <span className="flex-1 font-medium text-black dark:text-white">
                    Age:
                  </span>
                  <span>26</span>
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
                      80%
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
                      80%
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
                      90%
                    </div>
                  </div>
                  <p className="text-[13px] font-normal dark:font-light text-black dark:text-white/90">
                    PHP
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  download
                  className="text-center text-sm border border-theme bg-theme flex items-center justify-center gap-2 text-white rounded-4xl py-3.5 transition duration-300 text-[15px] font-semibold hover:bg-themeHover hover:border-themeHover"
                >
                  DOWNLOAD CV
                  <span className="animate-bounce">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0724 4.92378C12.0726 4.91034 12.0726 4.89691 12.0726 4.88368C12.0726 2.53968 10.1657 0.632812 7.82171 0.632812C5.47771 0.632812 3.57084 2.53968 3.57084 4.88368C3.57084 4.89691 3.57084 4.91055 3.57104 4.92378C1.95417 5.0992 0.691406 6.47267 0.691406 8.13554C0.691406 9.91704 2.14059 11.3662 3.92209 11.3662H4.33138C4.55606 11.3662 4.7384 11.1839 4.7384 10.9592C4.7384 10.7345 4.55606 10.5522 4.33138 10.5522H3.92209C2.58952 10.5522 1.50544 9.46811 1.50544 8.13554C1.50544 6.80297 2.58952 5.71888 3.92209 5.71888H4.00309C4.11868 5.71888 4.22898 5.66963 4.30611 5.58355C4.38345 5.49726 4.42028 5.38248 4.40766 5.2673C4.3924 5.12769 4.38487 5.00233 4.38487 4.88348C4.38487 2.98842 5.92665 1.44664 7.82171 1.44664C9.71678 1.44664 11.2586 2.98842 11.2586 4.88348C11.2586 5.00233 11.251 5.12769 11.2358 5.2673C11.2231 5.38228 11.26 5.49726 11.3373 5.58355C11.4144 5.66963 11.5247 5.71888 11.6403 5.71888H11.7217C13.0541 5.71888 14.138 6.80297 14.138 8.13554C14.138 9.46811 13.0541 10.5522 11.7217 10.5522H11.288C11.0634 10.5522 10.881 10.7345 10.881 10.9592C10.881 11.1839 11.0634 11.3662 11.288 11.3662H11.7217C13.5028 11.3662 14.952 9.91704 14.952 8.13554C14.952 6.47247 13.6892 5.099 12.0724 4.92378Z"
                        fill="white"
                      />
                      <path
                        d="M6.26314 11.942C6.0877 12.1876 6.26327 12.5288 6.5651 12.5288H8.81272L7.3764 14.5396C7.25728 14.7064 7.29591 14.9382 7.46268 15.0573C7.62945 15.1764 7.86122 15.1378 7.98034 14.971L9.83579 12.3734C10.0112 12.1278 9.83566 11.7866 9.53382 11.7866H7.2862L8.72252 9.77578C8.84164 9.609 8.80302 9.37724 8.63624 9.25811C8.46947 9.13899 8.23771 9.17762 8.11858 9.34439L6.26314 11.942Z"
                        fill="white"
                      />
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

        <div className="minfo__nav__wrapper bg-snowWhite dark:bg-power__black max-xl:hidden fixed top-1/2 -translate-y-1/2 right-4 2xl:right-14 z-999 flex items-center flex-col gap-4 border border-platinum dark:border-metalBlack rounded-4xl px-2.5 py-4">
          <div className="flex border rounded-full logo w-15 h-15 border-platinum dark:border-metalBlack flex-center hover:bg-white dark:hover:bg-metalBlack">
            <a href="index.html">
              <img src="assets/img/site-logo.svg" alt="Minfo" />
            </a>
          </div>

          <div className="my-4 menu">
            <ul className="space-y-2 text-center *:relative">
              <li className="group">
                <a
                  href="index.html#home"
                  className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                  data-title="Home"
                >
                  <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                    <i className="fal fa-home"></i>
                  </span>
                </a>
              </li>
              <li className="group">
                <a
                  href="index.html#about"
                  className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                  data-title="About"
                >
                  <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                    <i className="fal fa-user"></i>
                  </span>
                </a>
              </li>
              <li className="group">
                <a
                  href="index.html#service"
                  className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                  data-title="Service"
                >
                  <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                    <i className="fal fa-briefcase"></i>
                  </span>
                </a>
              </li>
              <li className="group">
                <a
                  href="index.html#skill"
                  className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                  data-title="Skills"
                >
                  <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                    <i className="fal fa-graduation-cap"></i>
                  </span>
                </a>
              </li>
              <li className="group">
                <a
                  href="index.html#resume"
                  className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                  data-title="Resume"
                >
                  <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                    <i className="fal fa-file-alt"></i>
                  </span>
                </a>
              </li>
              <li className="group active">
                <a
                  href="index.html#portfolio"
                  className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                  data-title="Poftfolio"
                >
                  <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                    <i className="fal fa-tasks-alt"></i>
                  </span>
                </a>
              </li>
              <li className="group">
                <a
                  href="index.html#blog"
                  className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                  data-title="Blog"
                >
                  <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                    <i className="fal fa-blog"></i>
                  </span>
                </a>
              </li>
              <li className="group">
                <a
                  href="index.html#testimonial"
                  className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                  data-title="Testimonial"
                >
                  <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                    <i className="fal fa-comment-alt-lines"></i>
                  </span>
                </a>
              </li>
              <li className="group">
                <a
                  href="index.html#contact"
                  className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                  data-title="Contact"
                >
                  <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                    <i className="fal fa-envelope"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="relative share group">
            <button
              className="w-10 h-10 text-sm border rounded-full border-platinum dark:border-metalBlack flex-center group-hover:bg-white dark:group-hover:bg-metalBlack text-black dark:text-white"
              aria-label="Share"
            >
              <i className="fal fa-share-alt"></i>
            </button>

            <div className="absolute bottom-0 flex items-center invisible px-5 py-6 space-x-3 transition-all duration-300 -translate-y-1/2 opacity-0 social-icons top-1/2 bg-white dark:bg-nightBlack rounded-4xl right-6 group-hover:opacity-100 group-hover:visible group-hover:right-10 -z-1 *:flex *:transition *:duration-200">
              <a
                href="#"
                className="hover:text-theme"
                title="Share with Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="hover:text-theme"
                title="Share with Linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-theme" title="Share with X">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-theme" title="Share with X">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem">
          <div className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">
            <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
                <i className="fal fa-tasks-alt text-theme"></i>
                PORTFOLIO
              </div>
              <div className="mt-5 mb-8 md:my-10 section-title">
                <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
                  Featured{" "}
                  <span className="font-semibold text-theme">Projects</span>
                </h2>
                <p className="max-w-xl mt-4 md:mt-6 subtitle">
                  I design products that are more than pretty. I make them
                  shippable and usable, ttempor non mollit dolor et do aute
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
                        src="assets/img/portfolio/portfolio-img1.png"
                        className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                        alt="portfolio"
                      />
                      <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                    </div>
                    <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                      Design
                      <span>Specialization</span>
                    </div>
                  </a>
                  <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
                      >
                        Branding
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="item md:col-span-1 group">
                  <a
                    href="project-single.html"
                    className="block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
                  >
                    <div className="img-wrapper">
                      <img
                        src="assets/img/portfolio/portfolio-img2.png"
                        className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                        alt="portfolio"
                      />
                      <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                    </div>
                    <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                      Design
                      <span>Specialization</span>
                    </div>
                  </a>
                  <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
                      >
                        Branding
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="item md:col-span-1 group">
                  <a
                    href="project-single.html"
                    className="block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
                  >
                    <div className="img-wrapper">
                      <img
                        src="assets/img/portfolio/portfolio-img3.png"
                        className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                        alt="portfolio"
                      />
                      <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                    </div>
                    <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                      Design
                      <span>Specialization</span>
                    </div>
                  </a>
                  <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
                      >
                        Branding
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="item md:col-span-1 group">
                  <a
                    href="project-single.html"
                    className="block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
                  >
                    <div className="img-wrapper">
                      <img
                        src="assets/img/portfolio/portfolio-img5.png"
                        className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                        alt="portfolio"
                      />
                      <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                    </div>
                    <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                      Design
                      <span>Specialization</span>
                    </div>
                  </a>
                  <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
                      >
                        Branding
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="item md:col-span-1 group">
                  <a
                    href="project-single.html"
                    className="block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
                  >
                    <div className="img-wrapper">
                      <img
                        src="assets/img/portfolio/portfolio-img6.png"
                        className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                        alt="portfolio"
                      />
                      <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                    </div>
                    <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                      Design
                      <span>Specialization</span>
                    </div>
                  </a>
                  <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
                      >
                        Branding
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
                        src="assets/img/portfolio/portfolio-img1-xl.png"
                        className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                        alt="portfolio"
                      />
                      <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                    </div>
                    <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                      Design
                      <span>Specialization</span>
                    </div>
                  </a>
                  <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
                      >
                        Branding
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="item md:col-span-1 group">
                  <a
                    href="project-single.html"
                    className="block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
                  >
                    <div className="img-wrapper">
                      <img
                        src="assets/img/portfolio/portfolio-img9.png"
                        className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                        alt="portfolio"
                      />
                      <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                    </div>
                    <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                      Design
                      <span>Specialization</span>
                    </div>
                  </a>
                  <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
                      >
                        Branding
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="item md:col-span-1 group">
                  <a
                    href="project-single.html"
                    className="block p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
                  >
                    <div className="img-wrapper">
                      <img
                        src="assets/img/portfolio/portfolio-img10.png"
                        className="rounded-lg max-md:h-[17rem] w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
                      />
                      <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100"></div>
                    </div>
                    <div className="info text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 relative z-10">
                      Design
                      <span>Specialization</span>
                    </div>
                  </a>
                  <ul className="absolute z-10 transition-all duration-500 opacity-0 md:top-9 md:right-9 top-6 right-6 group-hover:opacity-100">
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-light leading-none text-white transition-colors bg-metalBlack rounded-3xl hover:text-theme"
                      >
                        Branding
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10 text-center md:mt-13 flex items-center justify-center flex-wrap">
                <div className="pagination flex-center gap-2 lg:gap-4 *:w-10 *:h-10 *:inline-flex *:items-center *:justify-center *:border *:border-platinum *:dark:border-greyBlack *:rounded-full *:transition-all ">
                  <a
                    href="#"
                    className="prev hover:bg-theme hover:border-theme hover:text-white [&.active]:bg-theme [&.active]:text-white"
                  >
                    <svg
                      className="w-4"
                      viewBox="0 0 22 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.5738 7.75879L0.761719 7.75879M0.761719 7.75879L7.3501 1.17041M0.761719 7.75879L7.3501 14.3472"
                        stroke="currentcolor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="active hover:bg-theme hover:border-theme hover:text-white [&.active]:bg-theme [&.active]:text-white"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="hover:bg-theme hover:border-theme hover:text-white [&.active]:bg-theme [&.active]:text-white"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="hover:bg-theme hover:border-theme hover:text-white [&.active]:bg-theme [&.active]:text-white"
                  >
                    <i className="fal fa-ellipsis-h"></i>
                  </a>
                  <a
                    href="#"
                    className="hover:bg-theme hover:border-theme hover:text-white [&.active]:bg-theme [&.active]:text-white"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="next hover:bg-theme hover:border-theme hover:text-white [&.active]:bg-theme [&.active]:text-white"
                  >
                    <svg
                      className="w-4"
                      viewBox="0 0 22 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.19961 7.75879L21.0117 7.75879M21.0117 7.75879L14.4233 1.17041M21.0117 7.75879L14.4233 14.3472"
                        stroke="currentcolor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <footer className="py-6 ml-auto text-center footer-section max-w-content xl:max-2xl:max-w-50rem">
            <p className="">
              Copyright by
              <a href="#" className="transition-colors">
                @domain.com
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}