// components/BlogSection.tsx
import Image from "next/image";
import Link from "next/link";

const BlogSection = () => {
  const articles = [
    {
      title: "Elevate your mornings with perfectly brewed coffee",
      date: "03 May 2023",
      tags: ["UI Design"],
      imgSrc: "/assets/img/blog/article1.png",
      altText: "Post Title",
      href: "/article-details",
    },
    {
      title: "Mastering the clock: A guide to time management",
      date: "03 May 2023",
      tags: ["UI Design"],
      imgSrc: "/assets/img/blog/article2.png",
      altText: "Post Title",
      href: "/article-details",
    },
    {
      title: "Homeward bound: Crafting a productive home office",
      date: "03 May 2023",
      tags: ["UI Design"],
      imgSrc: "/assets/img/blog/article3.png",
      altText: "Post Title",
      href: "/article-details",
    },
  ];

  return (
    <div data-scroll-index="6" id="blog">
      <div className="blog-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-blog text-theme"></i>
          BLOG
        </div>
        <div className="mt-5 mb-8 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Latest <span className="font-semibold text-theme">Insights</span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
            I design products that are more than pretty. I make them shippable
            and usable, tempor non mollit dolor et do aute
          </p>
        </div>
        <div className="blog-list md:space-y-7.5 space-y-5 *:grid md:*:gap-2 *:grid-cols-12 *:overflow-hidden *:bg-flashWhite dark:*:bg-metalBlack *:items-center *:rounded-2xl *:p-3.5">
          <div className="article group">
            <div className="thumbnail overflow-hidden flex col-span-12 sm:col-span-6 md:col-span-5">
              <a
                href="article-details.html"
                className="block w-full overflow-hidden rounded-xl"
              >
                <img
                  src="assets/img/blog/article1.png"
                  className="object-cover object-center w-full h-full min-h-[288px] max-h-60 md:min-h-60 transition-all duration-300 ease-in-out group-hover:scale-105"
                  alt="Post Title"
                />
              </a>
            </div>
            <div className="post-content relative px-3 pt-6 pb-2 md:p-5 flex flex-col col-span-12 sm:col-span-6 md:col-span-7">
              <div className="flex items-center gap-5">
                <div className="text-sm font-medium tags">
                  <a href="#" className="transition-colors hover:text-theme">
                    UI Design{" "}
                  </a>
                  ,<span className="post_date"> 03 May 2023 </span>
                </div>
              </div>
              <div className="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">
                <a
                  href="article-details.html"
                  className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme"
                >
                  Elevate your mornings with perfectly brewed coffee
                </a>
              </div>
              <div className="read-details">
                <a
                  href="article-details.html"
                  className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="article group">
            <div className="thumbnail overflow-hidden flex col-span-12 sm:col-span-6 md:col-span-5">
              <a
                href="article-details.html"
                className="block w-full overflow-hidden rounded-xl"
              >
                <img
                  src="assets/img/blog/article2.png"
                  className="object-cover object-center w-full h-full min-h-[288px] max-h-60 md:min-h-60 transition-all duration-300 ease-in-out group-hover:scale-105"
                  alt="Post Title"
                />
              </a>
            </div>
            <div className="post-content relative px-3 pt-6 pb-2 md:p-5 flex flex-col col-span-12 sm:col-span-6 md:col-span-7">
              <div className="flex items-center gap-5">
                <div className="text-sm font-medium tags">
                  <a href="#" className="transition-colors hover:text-theme">
                    UI Design{" "}
                  </a>
                  ,<span className="post_date"> 03 May 2023 </span>
                </div>
              </div>
              <div className="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">
                <a
                  href="article-details.html"
                  className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme"
                >
                  Mastering the clock: A guide to time management
                </a>
              </div>
              <div className="read-details">
                <a
                  href="article-details.html"
                  className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="article group">
            <div className="thumbnail overflow-hidden flex col-span-12 sm:col-span-6 md:col-span-5">
              <a
                href="article-details.html"
                className="block w-full overflow-hidden rounded-xl"
              >
                <img
                  src="assets/img/blog/article3.png"
                  className="object-cover object-center w-full h-full min-h-[288px] max-h-60 md:min-h-60 transition-all duration-300 ease-in-out group-hover:scale-105"
                  alt="Post Title"
                />
              </a>
            </div>
            <div className="post-content relative px-3 pt-6 pb-2 md:p-5 flex flex-col col-span-12 sm:col-span-6 md:col-span-7">
              <div className="flex items-center gap-5">
                <div className="text-sm font-medium tags">
                  <a href="#" className="transition-colors hover:text-theme">
                    UI Design{" "}
                  </a>
                  ,<span className="post_date"> 03 May 2023 </span>
                </div>
              </div>
              <div className="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">
                <a
                  href="article-details.html"
                  className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme"
                >
                  Homeward bound: Crafting a productive home pffice
                </a>
              </div>
              <div className="read-details">
                <a
                  href="article-details.html"
                  className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center more-blogs md:mt-13">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
          >
            More Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
