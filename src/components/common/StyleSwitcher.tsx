import { FC } from "react";

const StyleSwitcher: FC = () => {
  return (
    <div className="style-switcher fixed right-0 top-1/2 -translate-y-1/2 translate-x-[15rem] w-[15rem] [&.active]:translate-x-0 transition z-[9999]">
      <div className="toggle-btn absolute -left-15 w-15 h-15 bg-white dark:bg-nightBlack text-black dark:text-white flex-center cursor-pointer rounded-[.5rem_0_0_.5rem] select-none shadow-sm shadow-slate-400">
        <span className="fal fa-cog fa-spin"></span>
      </div>

      <div className="theme-select shadow-sm shadow-slate-400 px-6 py-4 bg-white dark:bg-nightBlack rounded-[0_0_0_.5rem]">
        <h5 className="font-medium mb-2 !text-black dark:!text-white text-lg">
          Theme Mode
        </h5>

        <div className="flex items-center justify-between gap-4">
          <div
            className="switcher-input rounded-lg text-xl flex-[1] text-center transition cursor-pointer"
            data-theme="dark"
          >
            <button
              className="border w-full px-4 py-4 flex flex-col gap-1 justify-center items-center [&.active]:bg-flashWhite [&.active]:text-black dark:text-white rounded-md"
              id="dark_theme"
              title="Active Dark Theme"
            >
              <i className="fal fa-moon"></i>
            </button>
          </div>
          <div
            className="switcher-input rounded-lg text-lg flex-[1] text-center transition cursor-pointer"
            data-theme="light"
          >
            <button
              className="border w-full px-4 py-4 flex flex-col gap-1 justify-center items-center [&amp;.active]:bg-flashWhite [&amp;.active]:text-black dark:text-white rounded-md"
              id="light_theme"
              title="Active Light Theme"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M256 48v48m0 320v48m147.08-355.08-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08-33.94-33.94M142.86 142.86l-33.94-33.94"
                ></path>
                <circle
                  cx="256"
                  cy="256"
                  r="80"
                  fill="none"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                ></circle>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSwitcher;
