"use client";

import React from "react";

type ThemeSwitcherProps = {
  className?: string;
};

export default function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const [theme, setTheme] = React.useState("light");
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
    if (themeSelector === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
      systemTheme.addEventListener("change", systemThemeListener);
      return () => systemTheme.removeEventListener("change", systemThemeListener);
    }
  }, [themeSelector]);

  return (
    <div
      className="w-fit p-1 flex rounded-full border border-solid border-gray-900 dark:border-gray-100"
      role="radiogroup"
    >
      <button
        aria-checked={themeSelector === "light"}
        aria-label="Switch to light theme"
        className="w-8 h-8 rounded-full flex items-center justify-center border-0 fill-gray-600 dark:fill-gray-400 aria-checked:fill-black dark:aria-checked:fill-white"
        role="radio"
        type="button"
      />
      <button
        aria-checked={themeSelector === "system"}
        aria-label="Switch to system theme"
        className="w-8 h-8 rounded-full flex items-center justify-center border-0 fill-gray-600 dark:fill-gray-400 aria-checked:fill-black dark:aria-checked:fill-white"
        role="radio"
        type="button"
      />
      <button
        aria-checked={themeSelector === "dark"}
        aria-label="Switch to dark theme"
        className="w-8 h-8 rounded-full flex items-center justify-center border-0 fill-gray-600 dark:fill-gray-400 aria-checked:fill-black dark:aria-checked:fill-white"
        role="radio"
        type="button"
      />
    </div>
  );
}
