import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Header />
      <main className="container mx-auto">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
