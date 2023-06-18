"use client";

import React from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

type ThemeSwitcherProps = {
  className?: string;
};

export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const [theme, setTheme] = React.useState("dark");
  const [themeSelector, setThemeSelector] = React.useState("system");

  const systemThemeListener = (event: MediaQueryListEvent) => {
    event.matches ? setTheme("dark") : setTheme("light");
  };

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark");
    if (theme === "dark") {
      root.classList.add("dark");
    }
  }, [theme]);

  React.useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (themeSelector === "system") {
      systemTheme.addEventListener("change", systemThemeListener);
      systemTheme.matches ? setTheme("dark") : setTheme("light");
    }
    return () => systemTheme.removeEventListener("change", systemThemeListener);
  }, [themeSelector]);

  return (
    <div
      role="radiogroup"
      className={`w-fit p-1 flex rounded-full border border-solid border-gray-900 dark:border-gray-100 ${
        className ?? ""
      }`}
    >
      <button
        aria-checked={themeSelector === "light"}
        aria-label="Switch to light theme"
        className="w-8 h-8 rounded-full flex items-center justify-center border-0 group  aria-checked:bg-gray-400 dark:aria-checked:bg-gray-600"
        role="radio"
        type="button"
        onClick={() => {
          setThemeSelector("light");
          setTheme("light");
        }}
      >
        <FaSun
          className="fill-gray-600 dark:fill-gray-400 group-aria-checked:fill-black dark:group-aria-checked:fill-white align-middle"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </button>
      <button
        aria-checked={themeSelector === "system"}
        aria-label="Switch to system theme"
        className="w-8 h-8 rounded-full flex items-center justify-center border-0 group aria-checked:bg-gray-400 dark:aria-checked:bg-gray-700"
        role="radio"
        type="button"
        onClick={() => {
          setThemeSelector("system");
        }}
      >
        <FaDesktop
          className="fill-gray-600 dark:fill-gray-400 group-aria-checked:fill-black dark:group-aria-checked:fill-white align-middle"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </button>
      <button
        aria-checked={themeSelector === "dark"}
        aria-label="Switch to dark theme"
        className="w-8 h-8 rounded-full flex items-center justify-center border-0 group aria-checked:bg-gray-400 dark:aria-checked:bg-gray-600"
        role="radio"
        type="button"
        onClick={() => {
          setThemeSelector("dark");
          setTheme("dark");
        }}
      >
        <FaMoon
          className="fill-gray-600 dark:fill-gray-400 group-aria-checked:fill-black dark:group-aria-checked:fill-white align-middle"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </button>
    </div>
  );
}
