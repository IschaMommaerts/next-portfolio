import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function DarkModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add("[&_*]:!transition-none");
    window.setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none");
    }, 0);
  }

  function toggleMode() {
    disableTransitionsTemporarily();

    let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    let isSystemDarkMode = darkModeMediaQuery.matches;
    let isDarkMode = document.documentElement.classList.toggle("dark");

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="inline-flex items-center justify-center rounded-md text-gray-900 dark:text-gray-100"
      onClick={toggleMode}
    >
      <SunIcon className="h-10 w-10 transition dark:hidden" />
      <MoonIcon className="hidden h-10 w-10 transition dark:block" />
    </button>
  );
}
