import { Footer } from "@/components/Footer";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "@/next-i18next.config";
import { Trans, useTranslation } from "next-i18next";
import Header from "@/components/Header";
import Script from "next/script";

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18nextConfig)),
    },
  };
}

export default function Home() {
  const { t } = useTranslation(["common"]);
  const handlePopulistMouseIn = () => {
    const populistLogo = document.getElementById("populist-logo");
    if (populistLogo) populistLogo.classList.add("hover");
  };
  const handlePopulistMouseOut = () => {
    const populistLogo = document.getElementById("populist-logo");
    if (populistLogo) populistLogo.classList.remove("hover");
  };
  return (
    <>
      <Head>
        <title>Wiley McKay Conte</title>
      </Head>
      <main className="flex flex-col max-w-3xl mx-8 mt-8 mb-40 antialiased md:mt-20 lg:mt-32 lg:mx-auto">
        <Header />
        <p className="font-serif text-xl">
          <Trans i18nKey="bio">
            <a
              href="https://populist.us"
              className="underline decoration-dotted decoration-lagoon hover:text-lagoon-200"
              key="populist"
              onMouseEnter={handlePopulistMouseIn}
              onMouseLeave={handlePopulistMouseOut}
            >
              Populist
            </a>
          </Trans>
        </p>

        <Footer />
      </main>
    </>
  );
}
