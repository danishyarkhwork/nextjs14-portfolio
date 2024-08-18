import { FC } from "react";

const ServicesSection: FC = () => {
  return (
    <section data-scroll-index="0" id="services">
      <div className="service-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-concierge-bell text-theme"></i>
          SERVICES
        </div>
        <div className="mt-7 md:mt-10">
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            My <span className="font-semibold text-theme">Services</span>
          </h2>
          <p className="max-w-2xl mt-4 md:mt-6">
            I offer a wide range of services to help you build a strong online
            presence. Whether you need a simple website or a complex web
            application, I have the expertise to deliver.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-9">
          <div className="bg-white dark:bg-greyBlack200 p-6 rounded-4xl shadow-sm">
            <div className="text-4xl text-theme mb-4">
              <i className="fal fa-paint-brush"></i>
            </div>
            <h3 className="text-xl font-medium text-black dark:text-white">
              Web Design
            </h3>
            <p className="mt-2">
              Beautiful and functional web designs that create an engaging user
              experience.
            </p>
          </div>
          <div className="bg-white dark:bg-greyBlack200 p-6 rounded-4xl shadow-sm">
            <div className="text-4xl text-theme mb-4">
              <i className="fal fa-code"></i>
            </div>
            <h3 className="text-xl font-medium text-black dark:text-white">
              Web Development
            </h3>
            <p className="mt-2">
              High-quality web development services using modern technologies
              and frameworks.
            </p>
          </div>
          <div className="bg-white dark:bg-greyBlack200 p-6 rounded-4xl shadow-sm">
            <div className="text-4xl text-theme mb-4">
              <i className="fal fa-server"></i>
            </div>
            <h3 className="text-xl font-medium text-black dark:text-white">
              Backend Development
            </h3>
            <p className="mt-2">
              Scalable and secure backend systems that power your web
              applications.
            </p>
          </div>
          <div className="bg-white dark:bg-greyBlack200 p-6 rounded-4xl shadow-sm">
            <div className="text-4xl text-theme mb-4">
              <i className="fal fa-mobile-alt"></i>
            </div>
            <h3 className="text-xl font-medium text-black dark:text-white">
              Mobile App Development
            </h3>
            <p className="mt-2">
              Cross-platform mobile applications that deliver a seamless user
              experience.
            </p>
          </div>
          <div className="bg-white dark:bg-greyBlack200 p-6 rounded-4xl shadow-sm">
            <div className="text-4xl text-theme mb-4">
              <i className="fal fa-search"></i>
            </div>
            <h3 className="text-xl font-medium text-black dark:text-white">
              SEO Optimization
            </h3>
            <p className="mt-2">
              Optimize your website for search engines to increase visibility
              and traffic.
            </p>
          </div>
          <div className="bg-white dark:bg-greyBlack200 p-6 rounded-4xl shadow-sm">
            <div className="text-4xl text-theme mb-4">
              <i className="fal fa-shopping-cart"></i>
            </div>
            <h3 className="text-xl font-medium text-black dark:text-white">
              E-commerce Solutions
            </h3>
            <p className="mt-2">
              Comprehensive e-commerce solutions that drive sales and enhance
              user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
