import { FC } from "react";
import Image from "next/image";

const TestimonialsSection: FC = () => {
  return (
    <section data-scroll-index="0" id="testimonials">
      <div className="testimonial-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-comments text-theme"></i>
          TESTIMONIALS
        </div>
        <div className="mt-7 md:mt-10">
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            What My{" "}
            <span className="font-semibold text-theme">Clients Say</span>
          </h2>
          <p className="max-w-2xl mt-4 md:mt-6">
            Hear what some of my satisfied clients have to say about the work I
            have done for them.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-9">
          <div className="bg-white dark:bg-greyBlack200 p-6 rounded-4xl shadow-sm">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/img/testimonial-1.jpg"
                alt="Client 1"
                className="rounded-full w-12 h-12"
                width={48}
                height={48}
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-black dark:text-white">
                  John Doe
                </h3>
                <span className="text-sm text-grey dark:text-grey">
                  CEO, Company
                </span>
              </div>
            </div>
            <p>
              Brown is a phenomenal developer. He took our project to the next
              level and delivered everything on time and within budget.
            </p>
          </div>
          <div className="bg-white dark:bg-greyBlack200 p-6 rounded-4xl shadow-sm">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/img/testimonial-2.jpg"
                alt="Client 2"
                className="rounded-full w-12 h-12"
                width={48}
                height={48}
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-black dark:text-white">
                  Jane Smith
                </h3>
                <span className="text-sm text-grey dark:text-grey">
                  Marketing Director, Company
                </span>
              </div>
            </div>
            <p>
              I highly recommend Brown for any web development project. He is
              skilled, reliable, and a pleasure to work with.
            </p>
          </div>
          <div className="bg-white dark:bg-greyBlack200 p-6 rounded-4xl shadow-sm">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/img/testimonial-3.jpg"
                alt="Client 3"
                className="rounded-full w-12 h-12"
                width={48}
                height={48}
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-black dark:text-white">
                  Michael Lee
                </h3>
                <span className="text-sm text-grey dark:text-grey">
                  CTO, Startup
                </span>
              </div>
            </div>
            <p>
              Working with Brown was a fantastic experience. His expertise and
              attention to detail are unmatched.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
