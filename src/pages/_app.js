import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white dark:bg-gray-900 h-full">
      <Header />
      <main className="container p-4 mx-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
