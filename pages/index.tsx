import { Footer } from "@/components/Footer";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "@/next-i18next.config";
import { Trans, useTranslation } from "next-i18next";
import Header from "@/components/Header";

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18nextConfig)),
    },
  };
}

export default function Home() {
  const { t } = useTranslation(["common"]);
  return (
    <>
      <Head>
        <title>Wiley McKay Conte</title>
        <meta name="description" content="Some dudes website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="antialiased max-w-3xl mb-40 flex flex-col mx-8 mt-8 md:mt-20 lg:mt-32 lg:mx-auto text-">
        <Header />
        <p className="font-serif text-xl">
          <Trans i18nKey="bio">
            <a
              href="https://driift.live"
              className="underline decoration-dotted decoration-indigo-400 hover:text-indigo-200"
            >
              Driift.
            </a>
            <a
              href="https://populist.us"
              className="underline decoration-dotted decoration-indigo-400 hover:text-indigo-200"
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
