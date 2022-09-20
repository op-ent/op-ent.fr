import "~/styles/globals.css";
import "@op-ent/unstyled-ui-theme/dist/colors.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { Button, ThemeProvider } from "@op-ent/unstyled-ui";
import { theme } from "~/lib/theme";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <ThemeProvider value={theme}>
      <div className="bg-warning-3 px-4 py-2 text-warning-11 text-center border-b border-b-warning-6">
        Site en construction
      </div>
      <header className="sticky -top-px bg-neutral-3 border-b border-b-neutral-6">
        <div className="px-4 py-3 flex items-center justify-between custom-container">
          <Link href="/" className="inline-flex items-center space-x-2">
            <img src="/img/logo.svg" className="h-8" alt="Logo d'op-ent" />
            <div className="font-bold text-lg text-neutral-12">op-ent</div>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="text-neutral-11">Links</div>
            <Button
              size="sm"
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
              }}
            >
              Mode: {mode}
            </Button>
          </div>
        </div>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <div className="mt-auto bg-neutral-3 p-4 text-neutral-11 text-center">
        &copy; {new Date().getFullYear()} - op-ent
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
