import { Footer } from "@/components/Footer";
import { books } from "books";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "@/next-i18next.config";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Head from "next/head";

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18nextConfig)),
    },
  };
}

export default function Books() {
  return (
    <>
      <Head>
        <title>Wiley McKay Conte | Booklist</title>
        <meta name="description" content="Some dudes website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="antialiased max-w-3xl mb-40 mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto text-white">
        <Header />
        <div className="grid grid-flow-row-dense md:grid-cols-2 gap-4">
          {books.map((book) => (
            <div
              key={book.title}
              className="rounded bg-glass border border-slate-700 p-4 mb-4 font-serif grid grid-cols-[150px_auto] gap-4 h-fit backdrop-blur-md	"
            >
              <Image
                src={book.thumbnail}
                width={300}
                height={400}
                alt={book.title}
                className="rounded col-span-1"
              />

              <div className="col-span-1">
                <h1 className="font-sans uppercase text-xl font-bold">
                  {book.title}
                </h1>
                <p className="font-sans">{book.author}</p>
              </div>

              <div className="col-span-2">
                <p className="mt-2">{book.description}</p>
                {book.quotes?.map((quote) => (
                  <blockquote
                    key={quote}
                    className="p-4 mt-4 border-l-4 dark:border-lagoon dark:bg-glass rounded"
                  >
                    {quote}
                  </blockquote>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
}
