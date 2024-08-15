import Image from "next/image";

const Navigation: React.FC = () => {
  return (
    <div className="bg-snowWhite dark:bg-power__black fixed top-1/2 transform -translate-y-1/2 right-4 2xl:right-14 z-[999] flex items-center flex-col gap-4 border border-platinum dark:border-metalBlack rounded-4xl px-2.5 py-4 max-xl:hidden">
      {/* Site Logo Start */}
      <div className="flex border rounded-full w-[60px] h-[60px] border-platinum dark:border-metalBlack flex-center hover:bg-white dark:hover:bg-metalBlack">
        <a href="/">
          <Image
            src="/assets/img/site-logo.svg"
            alt="Minfo"
            width={40}
            height={40}
          />
        </a>
      </div>
      {/* Site Logo End */}

      {/* Main Menu/Navigation Start */}
      <div className="my-4 menu">
        <ul className="space-y-2 text-center relative">
          {[
            { href: "#home", icon: "fal fa-home", title: "Home" },
            { href: "#about", icon: "fal fa-user", title: "About" },
            { href: "#service", icon: "fal fa-briefcase", title: "Service" },
            { href: "#skill", icon: "fal fa-graduation-cap", title: "Skills" },
            { href: "#resume", icon: "fal fa-file-alt", title: "Resume" },
            {
              href: "#portfolio",
              icon: "fal fa-tasks-alt",
              title: "Portfolio",
            },
            { href: "#blog", icon: "fal fa-blog", title: "Blog" },
            {
              href: "#testimonial",
              icon: "fal fa-comment-alt-lines",
              title: "Testimonial",
            },
            { href: "#contact", icon: "fal fa-envelope", title: "Contact" },
          ].map((item, index) => (
            <li key={index} data-scroll-nav={index} className="group relative">
              <a
                href={item.href}
                className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 relative"
                data-title={item.title}
              >
                <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                  <i className={item.icon}></i>
                </span>
              </a>
              <span className="absolute right-10 bg-white dark:bg-metalBlack text-sm text-theme dark:text-white px-4 py-2 rounded-md font-normal dark:font-light opacity-0 transition-all duration-200 group-hover:opacity-100">
                {item.title}
              </span>
              <span className="absolute right-8 w-0 h-0 border-solid border-t-4 border-r-0 border-b-4 border-l-8 border-t-transparent border-r-transparent border-b-transparent border-l-white dark:border-l-metalBlack opacity-0 transition-all duration-200 group-hover:opacity-100"></span>
            </li>
          ))}
        </ul>
      </div>
      {/* Main Menu/Navigation End */}

      {/* Share Button Wrapper Start */}
      <div className="relative group">
        <button
          className="w-10 h-10 text-sm border rounded-full border-platinum dark:border-metalBlack flex-center group-hover:bg-white dark:group-hover:bg-metalBlack text-black dark:text-white"
          aria-label="Share"
        >
          <i className="fal fa-share-alt"></i>
        </button>

        {/* Social Share Icon Start  */}
        <div className="absolute bottom-0 flex items-center invisible px-5 py-6 space-x-3 transition-all duration-300 -translate-y-1/2 opacity-0 social-icons top-1/2 bg-white dark:bg-nightBlack rounded-4xl right-6 group-hover:opacity-100 group-hover:visible group-hover:right-10 z-[-1] flex transition duration-200">
          <a href="#" className="hover:text-theme" title="Share with Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-theme" title="Share with LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="hover:text-theme" title="Share with X">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-theme" title="Share with X">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        {/* Social Share Icon End  */}
      </div>
      {/* Share Button Wrapper End */}
    </div>
  );
};

export default Navigation;
