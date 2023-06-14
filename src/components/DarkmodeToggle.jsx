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
    let isDarkMode = document.documentElement.classList.toggle("dark");
    window.localStorage.isDarkMode = isDarkMode;
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="inline-flex items-center justify-center rounded-md text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary"
      onClick={toggleMode}
    >
      <SunIcon className="h-10 w-10 transition dark:hidden" />
      <MoonIcon className="hidden h-10 w-10 transition dark:block" />
    </button>
  );
}
