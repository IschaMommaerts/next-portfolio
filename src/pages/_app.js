import Header from "@/components/Header";
import "@/styles/globals.css";
import "yet-another-react-lightbox/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Header />
      <main className="container p-4 mx-auto">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
