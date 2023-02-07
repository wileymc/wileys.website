import { Header } from "@/components/Header";
import { books } from "books";
import Image from "next/image";

export default function Books() {
  return (
    <main className="antialiased max-w-3xl mb-40 mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto text-white">
      <Header />
      <div className="grid grid-flow-row-dense md:grid-cols-2 gap-4">
        {books.map((book) => (
          <div
            key={book.title}
            className="rounded bg-glass border border-glass p-4 mb-4 font-serif grid grid-cols-[150px_auto] gap-4 h-fit"
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
                  className="p-4 my-4 border-l-4 dark:border-indigo-500 dark:bg-gray-800 rounded"
                >
                  {quote}
                </blockquote>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
