"use client";
import { FC, useState } from "react";
import { useTheme } from "next-themes";

const StyleSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState(false);

  const toggleSwitcher = () => setActive(!active);

  return (
    <div
      className={`style-switcher fixed right-0 top-1/2 transform -translate-y-1/2 translate-x-[15rem] w-[15rem] transition z-[9999] ${
        active ? "translate-x-0" : ""
      }`}
    >
      <div
        className="toggle-btn absolute -left-15 w-15 h-15 bg-white dark:bg-nightBlack text-black dark:text-white flex-center cursor-pointer rounded-[.5rem_0_0_.5rem] select-none shadow-sm shadow-slate-400"
        onClick={toggleSwitcher}
      >
        <span className="fal fa-cog fa-spin"></span>
      </div>

      <div className="theme-select shadow-sm shadow-slate-400 px-6 py-4 bg-white dark:bg-nightBlack rounded-[0_0_0_.5rem]">
        <h5 className="font-medium mb-2 text-black dark:text-white text-lg">
          Theme Mode
        </h5>

        <div className="flex items-center justify-between gap-4">
          <div
            className="switcher-input rounded-lg text-xl flex-[1] text-center transition cursor-pointer"
            onClick={() => setTheme("dark")}
          >
            <button
              className={`border w-full px-4 py-4 flex flex-col gap-1 justify-center items-center ${
                theme === "dark"
                  ? "bg-flashWhite text-black"
                  : "dark:text-white"
              } rounded-md`}
              id="dark_theme"
              title="Active Dark Theme"
            >
              <i className="fal fa-moon"></i>
            </button>
          </div>
          <div
            className="switcher-input rounded-lg text-lg flex-[1] text-center transition cursor-pointer"
            onClick={() => setTheme("light")}
          >
            <button
              className={`border w-full px-4 py-4 flex flex-col gap-1 justify-center items-center ${
                theme === "light"
                  ? "bg-flashWhite text-black"
                  : "dark:text-white"
              } rounded-md`}
              id="light_theme"
              title="Active Light Theme"
            >
              <i className="fal fa-sun"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSwitcher;
