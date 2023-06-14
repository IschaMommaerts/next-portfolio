import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function () {
  if (window.localStorage.isDarkMode !== undefined) {
    if (window.localStorage.isDarkMode === 'true')
      document.documentElement.classList.add("dark");
  } else {
    let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkModeMediaQuery.matches)
      document.documentElement.classList.add("dark");
  }
})();
`,
            }}
          />
        </Head>
        <body className="min-h-screen bg-white dark:bg-gray-900">
          {/* some sources placed script inside body, before Main, but I experienced flashing */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
