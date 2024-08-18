import { FC } from "react";

const ContactSection: FC = () => {
  return (
    <section data-scroll-index="0" id="contact">
      <div className="contact-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-envelope text-theme"></i>
          CONTACT
        </div>
        <div className="mt-7 md:mt-10">
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Get in <span className="font-semibold text-theme">Touch</span>
          </h2>
          <p className="max-w-2xl mt-4 md:mt-6">
            Ready to start your project? Im available for freelance work or
            full-time positions. Reach out, and lets discuss how I can help you
            achieve your goals.
          </p>
        </div>
        <div className="mt-8">
          <form action="#" method="POST">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-black dark:text-white mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full py-3 px-4 rounded-4xl bg-platinum dark:bg-greyBlack200 text-black dark:text-white focus:ring-theme focus:border-theme"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-black dark:text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full py-3 px-4 rounded-4xl bg-platinum dark:bg-greyBlack200 text-black dark:text-white focus:ring-theme focus:border-theme"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm text-black dark:text-white mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full py-3 px-4 rounded-4xl bg-platinum dark:bg-greyBlack200 text-black dark:text-white focus:ring-theme focus:border-theme"
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="py-4 px-7 lg:px-9 rounded-4xl bg-theme text-white text-[15px] md:text-base font-medium transition-all duration-300 hover:shadow-theme_shadow"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
