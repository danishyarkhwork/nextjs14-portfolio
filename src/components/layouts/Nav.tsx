import React from "react";

export default function Nav() {
  return (
    <div className="minfo__nav__wrapper bg-snowWhite dark:bg-power__black max-xl:hidden fixed top-1/2 -translate-y-1/2 right-4 2xl:right-14 z-999 flex items-center flex-col gap-4 border border-platinum dark:border-metalBlack rounded-4xl px-2.5 py-4">
      {/* Site Logo Start */}
      <div className="flex border rounded-full logo w-15 h-15 border-platinum dark:border-metalBlack flex-center hover:bg-white dark:hover:bg-metalBlack">
        <a href="index.html">
          <img src="assets/img/site-logo.svg" alt="Minfo" />
        </a>
      </div>
      {/* Site Logo End */}

      {/* Main Menu/Nav Start */}
      <div className="my-4 menu">
        <ul className="space-y-2 text-center *:relative">
          {[
            {
              href: "#home",
              icon: "fal fa-home",
              title: "Home",
              scrollNav: "0",
            },
            {
              href: "#about",
              icon: "fal fa-user",
              title: "About",
              scrollNav: "1",
            },
            {
              href: "#service",
              icon: "fal fa-briefcase",
              title: "Service",
              scrollNav: "2",
            },
            {
              href: "#skill",
              icon: "fal fa-graduation-cap",
              title: "Skills",
              scrollNav: "3",
            },
            {
              href: "#resume",
              icon: "fal fa-file-alt",
              title: "Resume",
              scrollNav: "4",
            },
            {
              href: "#portfolio",
              icon: "fal fa-tasks-alt",
              title: "Portfolio",
              scrollNav: "5",
            },
            {
              href: "#blog",
              icon: "fal fa-blog",
              title: "Blog",
              scrollNav: "6",
            },
            {
              href: "#testimonial",
              icon: "fal fa-comment-alt-lines",
              title: "Testimonial",
              scrollNav: "7",
            },
            {
              href: "#contact",
              icon: "fal fa-envelope",
              title: "Contact",
              scrollNav: "8",
            },
          ].map((item, index) => (
            <li key={index} data-scroll-nav={item.scrollNav} className="group">
              <a
                href={item.href}
                className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
                data-title={item.title}
              >
                <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                  <i className={item.icon}></i>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Main Menu/Nav End */}

      {/* Share Button Wrapper Start */}
      <div className="relative share group">
        <button
          className="w-10 h-10 text-sm border rounded-full border-platinum dark:border-metalBlack flex-center group-hover:bg-white dark:group-hover:bg-metalBlack text-black dark:text-white"
          aria-label="Share"
        >
          <i className="fal fa-share-alt"></i>
        </button>

        {/* Social Share Icon Start */}
        <div className="absolute bottom-0 flex items-center invisible px-5 py-6 space-x-3 transition-all duration-300 -translate-y-1/2 opacity-0 social-icons top-1/2 bg-white dark:bg-nightBlack rounded-4xl right-6 group-hover:opacity-100 group-hover:visible group-hover:right-10 -z-1 *:flex *:transition *:duration-200">
          {[
            {
              href: "#",
              icon: "fab fa-facebook",
              title: "Share with Facebook",
            },
            {
              href: "#",
              icon: "fab fa-linkedin-in",
              title: "Share with Linkedin",
            },
            { href: "#", icon: "fab fa-twitter", title: "Share with X" },
            {
              href: "#",
              icon: "fab fa-instagram",
              title: "Share with Instagram",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:text-theme"
              title={item.title}
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </div>
        {/* Social Share Icon End */}
      </div>
      {/* Share Button Wrapper End */}
    </div>
  );
}
