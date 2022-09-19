import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bg-amber-200 px-4 py-2 text-amber-800 text-center">
        Site en construction
      </div>
      <header className="static top-0 bg-white border-b border-b-gray-200">
        <div className="p-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center space-x-2">
            <img src="/img/logo.svg" className="h-8" alt="Logo d'op-ent" />
            <div className="font-bold text-lg text-gray-700">op-ent</div>
          </Link>
          <div>Links</div>
        </div>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <div className="mt-auto bg-gray-200 p-4 text-gray-600 text-center">
        &copy; {new Date().getFullYear()} - op-ent
      </div>
    </>
  );
}

export default MyApp;
