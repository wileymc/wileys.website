import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Arimo, Merriweather } from "@next/font/google";
import clsx from "clsx";
import { appWithTranslation } from "next-i18next";

const arimo = Arimo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-arimo",
  display: "swap",
});

const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={clsx(arimo.variable, merriweather.variable)}>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(App);
