import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Arimo, Merriweather } from "@next/font/google";
import clsx from "clsx";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={clsx(arimo.variable, merriweather.variable)}>
      <Component {...pageProps} />
    </div>
  );
}
