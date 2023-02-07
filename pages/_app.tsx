import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto, Merriweather } from "@next/font/google";
import clsx from "clsx";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
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
    <div className={clsx(roboto.variable, merriweather.variable)}>
      <Component {...pageProps} />
    </div>
  );
}
