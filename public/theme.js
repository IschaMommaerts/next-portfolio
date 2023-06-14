(function () {
  if (window.localStorage.isDarkMode != undefined) {
    if (window.localStorage.isDarkMode)
      document.documentElement.classList.add("dark");
  } else {
    let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkModeMediaQuery.matches)
      document.documentElement.classList.add("dark");
  }
})();
