import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Yanone_Kaffeesatz, Merriweather } from "@next/font/google";
import clsx from "clsx";
import { appWithTranslation } from "next-i18next";

const yanone = Yanone_Kaffeesatz({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-yanone",
  display: "swap",
});

const merriweather = Merriweather({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={clsx(yanone.variable, merriweather.variable)}>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(App);
